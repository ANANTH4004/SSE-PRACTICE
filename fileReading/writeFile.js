import { writeFile, appendFile } from 'fs/promises'

export async function writeFileContent(filepath, content) {
  try {
    const data = await writeFile(filepath, content, 'utf8')
    console.warn('File append successfully:', data)
  } catch (error) {
    console.error('Error writing file:', error)
  }
}

writeFileContent(
  './logs.txt',
  'This is the content I want to write to the file.'
)

export async function appendFileContent(filepath, content) {
  try {
    const data = await appendFile(filepath, content, 'utf8')
    console.warn('File written successfully:', data)
  } catch (error) {
    console.error('Error writing file:', error)
  }
}
appendFileContent(
  './logs.txt',
  'This is the content I want to append to the file.'
)
