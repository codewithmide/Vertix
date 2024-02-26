import classnames from "@/shared/classnames";

interface modalPropType {
    children: JSX.Element,
    classname?: string,
    show: boolean,
    handleModal: (e: any) => void,
}

const Modal = ({ children, classname, show, handleModal }: modalPropType) => {
    return (
        <>
            {show && <div className={classnames("w-full h-full  absolute top-0 left-0 flex items-center justify-center ", classname)} >
                <div className="bg-[#03030333] absolute w-full h-full"
                    onClick={handleModal}
                >

                </div>

                <div className="w-full max-w-lg min-h-[50] float z-50">
                    {children}
                </div>
            </div>}
        </>
    );
}

export default Modal;