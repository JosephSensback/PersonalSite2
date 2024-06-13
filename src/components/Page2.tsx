import Scroll from "./Scroll"

const data = [
  { title: "asd", description: "description" },
  { title: "qwe", description: "qwe" },
  { title: "asd", description: "description" },
  { title: "qwe", description: "qwe" },
  { title: "asd", description: "description" },
  { title: "asd", description: "description" },
  { title: "qwe", description: "qwe" },
  { title: "asd", description: "description" },
  { title: "qwe", description: "qwe" },
  { title: "asd", description: "description" },
  { title: "asd", description: "description" },
  { title: "qwe", description: "qwe" },
  { title: "asd", description: "description" },
  { title: "qwe", description: "qwe" },
  { title: "asd", description: "description" },
  { title: "asd", description: "description" },
  { title: "qwe", description: "qwe" },
  { title: "asd", description: "description" },
  { title: "qwe", description: "qwe" },
  { title: "asd", description: "description" },
  { title: "asd", description: "description" },
  { title: "qwe", description: "qwe" },
  { title: "asd", description: "description" },
  { title: "qwe", description: "qwe" },
  { title: "asd", description: "description" },
  { title: "asd", description: "description" },
  { title: "qwe", description: "qwe" },
  { title: "asd", description: "description" },
  { title: "qwe", description: "qwe" },
  { title: "asd", description: "description" },
]

const Page2 = () => {
  return (
    <div className="text-xl text-white animate-fade_in_text">
      <Scroll data={data} />
    </div>
  )
}

export default Page2
