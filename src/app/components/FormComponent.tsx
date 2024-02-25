import { useEffect, useRef, useState } from "react";
import uploadIcon from "@/assets/svgs/upload.svg"
import classnames from "@/shared/classnames";

export const FileUpload = ({ image, handleFileChange, classname, imageClassname = 'rounded-md' }: any) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [imagePreview, setImagePreview] = useState();

    const onFileChange = (e: any) => {
        const selectedFile = e.target.files[0];
        setImagePreview(selectedFile);
        handleFileChange(e)
    }

    return (
        <div
            onClick={() => fileInputRef?.current?.click()}
            className="bg-[#EDEDED] cursor-pointer flex flex-col items-center border-green border-dashed border p-3 text-center justify-center"
        >
            <input
                type="file"
                id="fileUpload"
                className="block w-full h-[150px] text-sm text-[#484444] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                                file:text-sm file:font-semibold file:bg-violet-50 file:text-indigo-700 hover:file:bg-violet-100 cursor-pointer mb-2"
                onChange={(e) => onFileChange(e)}
                style={{ display: "none" }}
                ref={fileInputRef}
            />
            {!imagePreview && !image ? (
                <>
                    <div className="flex flex-col items-center">
                        <img src={uploadIcon} alt="" />
                        <small className="text-[#484444] ">
                            Upload Image
                        </small>
                    </div>
                </>
            ) : imagePreview ?
                <img
                    src={URL.createObjectURL(imagePreview)}
                    alt="Selected Image"
                    className="object-cover h-[150px] w-full rounded-lg"

                />
                :
                image && (
                    <img
                        src={image}
                        alt="Hospital Image"
                        className="object-cover h-[150px]"

                    />)
            }
        </div >
    );
};



interface InputProps {
    onChange: (e: any) => void,
    classname?: string
    label?: string,
    name?: string,
    value?: any,
    placeholder?: string,
    type?: string
    preIcon?: any,
    postIcon?: any,
    postIconAction?: (e: any) => void,
    buttonClassnames?: any,
    isChecked?: boolean
    imageClassname?: string
    dropdownList?: string[]
    selected?: string[]
    selectItem?: (item: string) => void
}

export const Input = ({ classname, label, name, value, onChange, placeholder, type = "text", postIcon = false, postIconAction, preIcon = false, isChecked, imageClassname, buttonClassnames, dropdownList, selected, selectItem }: InputProps) => {
    // TODO: Create the hover and active state of the checkboxes

    // These are states for the dropdown vatiant
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredData, setFilterData] = useState(dropdownList ? dropdownList : [])
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        setFilterData(dropdownList ? dropdownList : [])
    }, [dropdownList])


    const toggleModal = () => {
        setIsModalVisible(isModalVisible ? false : true)
    }

    const onSearch = (e: any) => {
        setSearchQuery(e.target.value)
        if (dropdownList) {
            setFilterData(dropdownList?.filter((item: string) => item.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())))
        }
    }

    if (type === "checkbox") {
        return (
            <div className="flex items-center ">
                <input
                    type={"checkbox"}
                    id="myCheckbox"
                    className="form-checkbox checked:bg-brand text-[#BFBEBE]"
                    onChange={onChange}
                    checked={isChecked}
                />


                {label && <small
                    className='ml-2 text-sm font-medium'
                >
                    {label}
                </small>}
            </div>
        )
    }

    if (type === "textbox") {
        return (
            <div className={classnames('flex flex-col gap-2 ', classname)}>
                {label && <label
                    className="block text-sm font-medium"
                >
                    {label}
                </label>}
                <textarea
                    id={label}
                    name={label}
                    rows={4}
                    cols={50}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="border border-[#BFBEBE] rounded-md focus:outline-brand focus:bg-none p-3 placeholder-[#777373] bg-transparent w-full">
                </textarea>
            </div>
        );
    }

    // if (type === "mainSearch") {
    //     return (
    //         <div className={classnames('flex flex-col gap-2 ', classname)}>
    //             {label && <small className='text-sm font-medium'>{label}</small>}

    //             <div className='flex items-center outline-2 outline-transparent text-base rounded-full focus:outline-none focus:border-dark bg-[#FAF8F8] '>
    //                 {
    //                     preIcon
    //                     && <Image className="h-4 w-4 ml-3" src={preIcon} alt="" />
    //                 }
    //                 <input
    //                     type={"text"} id={label}
    //                     className="focus:outline-none focus:bg-none w-full p-3 placeholder-[#484444] bg-transparent text-sm"
    //                     placeholder={placeholder}
    //                     value={value}
    //                     onChange={onChange}
    //                 />
    //             </div>
    //         </div>
    //     )
    // }


    // if (type === "dropdown" && selectItem && selected) {
    //     return (
    //         <div className={classnames('flex flex-col gap-2 ', classname)}>
    //             {label && <label
    //                 className="block text-sm font-medium"
    //             >
    //                 {label}
    //             </label>}
    //             <div onClick={() => toggleModal()} className='flex items-center input-wrapper outline-2 outline-transparent text-base border rounded-lg border-[#111A3A4D] focus:outline-none focus:border-dark bg-transparent '>
    //                 {
    //                     preIcon
    //                     && <Image className="h-4 w-4 ml-3" src={preIcon} alt="" />
    //                 }
    //                 <input
    //                     type={type} id={label}
    //                     className="focus:outline-none focus:bg-none p-3 placeholder-[#777373] bg-transparent w-full"
    //                     placeholder={placeholder}
    //                     value={value}
    //                     onChange={() => setIsModalVisible(true)}
    //                     name={name}
    //                 />
    //                 {postIcon && <button className={classnames('', buttonClassnames)} onClick={postIconAction}><Image className={classnames("h-4 w-4 mr-3", imageClassname)} src={postIcon} alt="" /></button>}
    //             </div>

    //             <Modal show={isModalVisible} handleModal={toggleModal}>
    //                 <div className="w-full max-w-lg min-h-[50] bg-white p-8 z-10">
    //                     <div className="flex items-center justify-between">
    //                         <p className="font-[500] text-base ">{placeholder}</p>
    //                         <p className="font-bold text-base text-action cursor-pointer" onClick={() => setIsModalVisible(false)}>Done</p>
    //                     </div>
    //                     <Input
    //                         preIcon={searchIcon}
    //                         buttonClassnames="bg-[#FEF6F5] p-3 rounded-r-md"
    //                         placeholder="Search"
    //                         value={searchQuery}
    //                         onChange={(e) => onSearch(e)}
    //                         postIcon={addButtonIcon}
    //                         postIconAction={toggleModal}
    //                         classname="mt-6" imageClassname="h-6 w-6"
    //                     />

    //                     <div className="max-h-80 mt-4 overflow-scroll">
    //                         {filteredData?.map(item => <div className="flex gap-2 p-3 cursor-pointer items-center" onClick={() => selectItem(item)}>
    //                             {selected.includes(item) ? <Image src={checkIcon} alt="" /> : <span className="h-4 w-4 bg-slate-200 mr-1"></span>}
    //                             <p>{item}</p>
    //                         </div>)}
    //                     </div>

    //                 </div>
    //             </Modal>
    //         </div >
    //     );
    // }

    return (
        <div className={classnames('flex flex-col gap-2 ', classname)}>
            {label && <small className='text-sm font-medium'>{label}</small>}

            <div className='flex items-center input-wrapper outline-2 outline-transparent text-base border border-green text-sm focus:outline-none focus:border-dark bg-transparent '>
                {
                    preIcon
                    && <img className="h-4 w-4 ml-3" src={preIcon} alt="" />
                }
                <input
                    type={type} id={label}
                    className="focus:outline-none focus:bg-none p-3 placeholder-[#777373] bg-transparent w-full"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                />
                {postIcon && <button className={classnames('', buttonClassnames)} onClick={postIconAction}><img className={classnames("h-4 w-4 mr-3", imageClassname)} src={postIcon} alt="" /></button>}
            </div>
        </div>

    )
}