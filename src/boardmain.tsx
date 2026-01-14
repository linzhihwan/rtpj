import { useEffect, useState } from 'react'
import './index.css'

export default function Boardmain() {

  type Post = {
  id: string
  title: string
  content: string
  createdAt: string
  isEditing: boolean // 👈 추가
}

const [posts, setPosts] = useState<Post[]>(() => {
  const saved = localStorage.getItem('posts')
  return saved ? JSON.parse(saved) as Post[] : []
})

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    const newPost = {
      id: crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
      createdAt: new Date().toISOString(),
      isEditing: false,
    }
    setPosts((prev) => [newPost, ...prev])
    setTitle('')
    setContent('')
  }

  const handleDelete = (id: String) => {
    //setPosts((prev: string[]) => prev.filter((p) => p.id !== id))
    setPosts((prev: Post[]) => prev.filter((p) => p.id !== id))
  }

  const toggleEdit = (id:String) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isEditing: !p.isEditing } : p
      )
    )
  }

  const handleUpdate = (id:Post["id"], newTitle:Post["title"], newContent:Post["content"]) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, title: newTitle, content: newContent, isEditing: false }
          : p
      )
    )
  }

  return (
    <div className="container">
      <h2>간단 게시판 (수정 기능 포함)</h2>

      <form className="form" onSubmit={handleAdd}>
        <input
          type="text"
          value={title}
          placeholder="제목"
          onChange={(e) => setTitle(e.target.value)}
        /><br></br>

        <textarea
          rows={3}
          value={content}
          placeholder="내용"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">등록</button>
      </form>

      <ul>
        {posts.map((post) => (
          <li key={post.id} className="card">
            {post.isEditing ? (
              <EditForm
                post={post}
                onSave={handleUpdate}
                onCancel={() => toggleEdit(post.id)}
              />
            ) : (
              <>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <small>
                  {new Date(post.createdAt).toLocaleString()}
                </small>
                <div>
                  <button onClick={() => toggleEdit(post.id)}>수정</button>
                  <button onClick={() => handleDelete(post.id)}>삭제</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

type Post = {
  id: string
  title: string
  content: string
  createdAt: string
  isEditing: boolean // 👈 추가
}

type EditFormProps = {
  post: Post
  onSave: (id: string, newTitle: string, newContent: string) => void
  onCancel: () => void
}

/* function EditForm({ post, onSave, onCancel }) {
  const [newTitle, setNewTitle] = useState(post.title)
  const [newContent, setNewContent] = useState(post.content)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSave(post.id, newTitle, newContent)
  } */

function EditForm({ post, onSave, onCancel }: EditFormProps) {
  const [newTitle, setNewTitle] = useState(post.title)
  const [newContent, setNewContent] = useState(post.content)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(post.id, newTitle, newContent)
  }

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <textarea
        rows={3}
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <button type="submit">저장</button>
      <button type="button" onClick={onCancel}>취소</button>
    </form>
  )
}
