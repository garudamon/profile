import Image from "next/image";

const ResumePage = () => {
    return (
    <div className="p-5 sm:mx-auto sm:p-0 w-full max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
            <div className="flex flex-col gap-5">
                <div>avatar</div>
                <div>info</div>
            </div>
            <div className="col-span-2">
                <div>about</div>
                <div>resume</div>
            </div>
        </div>
    </div>
    )
}

export default ResumePage;