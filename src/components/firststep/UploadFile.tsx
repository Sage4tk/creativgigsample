import { useEffect, useRef, useState } from "react";

const UploadFile:React.FC = () => {

    const input_ref = useRef<HTMLInputElement | null>(null);

    const [files, setFiles] = useState<Array<File>>([]);

    // file upload listener
    const handle_file = (event:React.ChangeEvent<HTMLInputElement>) => {

        // check if event files and if all files are images
        if (
            event.target.files &&
            Array.from(event.target.files).every(files => files.type.includes("image"))
        ) {

            setFiles([
                ...files,
                ...Array.from(event.target.files)
            ]);
        } else {
            alert("Please select a valid image.")
        }
    }

    // drag over even
    const drag_file = (event:React.DragEvent<HTMLDivElement>) => {
        
        event.preventDefault();

        // loop through the files and check if valid
        if (event.dataTransfer.items) {
            const files:Array<File> = [];

            for (const data of event.dataTransfer.items) {

                if (data.kind === "file") {
                    const single_file = data.getAsFile();

                    if (single_file && single_file.type.startsWith("image/")) {
                        files.push(single_file);
                    } else {
                        alert("Please select a valid image.");

                        break;
                    }
                }

            }

            // add files to state
            setFiles(prev => [...prev, ...files]);
        }
    }

    useEffect(() => {
        console.log(files)
    }, [files]);

    return (
        <div className="flex flex-col items-center w-full">

            <div className="w-full lg:w-[787px] md:w-[500px] pt-[38px] md:px-0 px-6">

                <div>
                    <h3 className="text-main text-[1.125rem] font-bold mb-2">Do you want to share any files?</h3>

                    <p className="text-[#303030] text-[0.875rem] mb-4">Share files like sketches, screenshots, examples or other reference material.</p>
                </div>

                <div onDragOver={e => e.preventDefault()} onDrop={drag_file} className="border border-[#E0E0E0] border-dashed rounded-[4px] flex flex-col items-center py-[55px]">


                    {files.length === 0 && (
                        <div className="flex flex-col items-center mb-[1rem]">

                            <img className="mb-[10px] select-none pointer-events-none" src="/img/icons/file.svg" />

                            <span className="text-[0.875rem] text-[#858585] pointer-events-none select-none">Drag file here to upload or</span>
                        </div>
                    )}

                    {files.length !== 0 && (
                        files.map((item,index) => (
                            <div className="mb-4" key={index}>
                                <p className="text-[0.8rem] text-[#303030]">{item.name}</p>
                            </div>
                        ))
                    )}

                    <button className="font-bold text-sub text-[1rem] border border-sub rounded-full py-[6px] px-[30px]" onClick={() => input_ref.current?.click()}>
                        Add File
                    </button>

                    <input ref={input_ref} className="hidden" type="file" onChange={handle_file} multiple />

                </div>

            </div>
            
        </div>
    )
}

export default UploadFile;