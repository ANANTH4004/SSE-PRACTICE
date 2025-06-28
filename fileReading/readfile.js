import { readFile } from 'fs/promises'

export async function readingFile(filepath) {
  try {
    const data = await readFile(filepath, 'utf8')
    console.warn('File content:', data)
  } catch (error) {
    console.error('Error reading file:', error)
  }
}

readingFile('./logs.txt')
