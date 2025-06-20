import { useEffect, useState } from "react"

const useTypewriter = (words: string[], speed = 100, delay = 2000) => {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]

    let timeout = setTimeout(() => {
      if (isDeleting) {
        setText(current.substring(0, text.length - 1))
      } else {
        setText(current.substring(0, text.length + 1))
      }

      if (!isDeleting && text === current) {
        timeout = setTimeout(() => setIsDeleting(true), delay)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setIndex((prev) => prev + 1)
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index, words, speed, delay])

  return text
}

export default useTypewriter
