
interface DescriptionCardParams {
    type: string
    title: string
    subtitle: string
    description: string
    image: string
}
const DescriptionCard: React.FC<DescriptionCardParams> = ({ type = 'left', title, subtitle, description, image }) => {
    if (type === "left") {
        return (
            <div>
                <div className="flex w-10/12 gap-x-8 mx-auto py-8 items-center">
                    <div className="flex-1">
                        <h2 className="mt-4 text-3xl font-semibold text-slate-900">{title}</h2>
                        <p className="mt-2 font-medium text-slate-800">{subtitle}</p>
                        <p className="mt-2 text-sm text-slate-700">{description}</p>
                    </div>
                    <div className="flex-1 bg-slate-100 flex justify-center items-center rounded-xl">
                        <img className="rounded-md p-8 w-8/12" src={image} />
                    </div>
                </div>

            </div>
        )
    } else if (type === "right") {
        return (
            <div>
                <div className="flex w-10/12 gap-x-8 mx-auto py-8 items-center">
                    <div className="flex-1 order-2">
                        <h2 className="mt-4 text-3xl font-semibold text-slate-900">{title}</h2>
                        <p className="mt-2 font-medium text-slate-800">{subtitle}</p>
                        <p className="mt-2 text-sm text-slate-700">{description}</p>
                    </div>
                    <div className="flex-1 order-1 bg-slate-100 flex justify-center items-center rounded-xl">
                        <img className="rounded-md p-8 w-8/12" src={image} />
                    </div>
                </div>

            </div>
        )
    }

}

export default DescriptionCard