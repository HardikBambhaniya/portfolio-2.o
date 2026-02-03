import { Typewriter } from "@/components/ui/typewriter"

function Preview() {
  return (
    
        <Typewriter
          text={[
            "Frontend",
            "Backend",
            "Api Integration",
          ]}
          speed={70}
          className="text-yellow-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
        />
      
  )
}

export { Preview }