import { parseArgs } from "node:util"
import { readdirSync } from "node:fs"

const { values } = parseArgs({
    args: Bun.argv,
    options: {
        prefix: {
            type: 'string',
        },
        infix: {
            type: 'string',
            multiple: true,
        },
        location: {
            type: "string",
        }
    },
    allowPositionals: true,
})

if (!values.location) {
    console.log("Please provide a location")
    process.exit(1)
}

function processFolder(prefix: string | undefined, folder: string, infix: string[] | undefined) {
    readdirSync(folder).filter((file) => file.endsWith(".txt")).forEach(async (file) => {
        const filePath = `${folder}/${file}`
        let lines = await Bun.file(filePath).text()
        
        // Replace line breaks with `, ` and remove "R-18, "
        let formattedContent = lines.replace(/(\r\n|\n|\r)/g, ', ')

        infix?.forEach((infix) => {
            formattedContent = formattedContent.replace(`${infix}, `, "")
        })
        
        // Prepend the prefix if provided
        if (prefix) {
            formattedContent = `${prefix}, ${formattedContent}`
        }

        // Remove the trailing `,` and convert to lowercase
        formattedContent = formattedContent.slice(0, -1).toLowerCase() 

        // Regular expressions for Hiragana, Katakana, and Kanji
        const hiraganaRegex = /[\u3040-\u309F]/
        const katakanaRegex = /[\u30A0-\u30FF]/
        const kanjiRegex = /[\u4E00-\u9FAF]/
        
       // Check if formattedContent includes Hiragana, Katakana, or Kanji
        if (hiraganaRegex.test(formattedContent) || katakanaRegex.test(formattedContent) || kanjiRegex.test(formattedContent)) {
            console.log(`File with Japanese characters: ${file}`)
        }

        await Bun.write(filePath, formattedContent)
    })
}

processFolder(values.prefix!, values.location, values.infix)   