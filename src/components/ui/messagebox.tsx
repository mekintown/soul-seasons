const MessageBox = ({ message }: { message: string })=>{
    return(
    <div className=" flex justify-center items-center h-full">
        <div className="w-[265px] h-[207px] opacity-[70%] bg-white flex items-center justify-center rounded-[12px] ">
            <p className="w-[227px] h-[175px] text-center">{message}</p>
        </div>
        
    </div>
    )
}

export default MessageBox;