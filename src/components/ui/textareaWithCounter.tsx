import { ChangeEvent } from "react"
import { Textarea } from "./textarea"

export const TextareaWithCounter = ({
  onChange,
  value,
  maxCount,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  maxCount?: number
}) => {
  return (
    <div className="relative">
      <Textarea
        className=" bg-white border-none rounded-xl"
        onChange={(e) => {
          if (!maxCount || e.target.value.length <= maxCount) {
            onChange(e)
          }
        }}
        value={value}
      />
      {maxCount ? (
        <div className="absolute bottom-1 right-3 text-[#8E8E93] text-lg font-light">
          {value.length}/{maxCount}
        </div>
      ) : null}
    </div>
  )
}
