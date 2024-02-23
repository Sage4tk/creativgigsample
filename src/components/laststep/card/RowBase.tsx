interface IRowBaseProps {
    heading: string,
    description?: string,
    bottom?: boolean,
    children?: React.ReactNode
}

const RowBase:React.FC<IRowBaseProps> = ({
    heading,
    description,
    bottom,
    children
}) => {
    return (
        <div className={`${bottom ? "":"mb-4"}`}>
            
            <h6 className="text-main font-bold mb-2 w-full">{heading}</h6>
            {description && <p className="text-[0.875rem] text-[#545454]">{description}</p>}

            {children}

        </div>
    )
}

export default RowBase;