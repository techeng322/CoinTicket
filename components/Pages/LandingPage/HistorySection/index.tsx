import Content from "./Content"
import SortButtons from "./SortButtons"

const HistorySection = () => {
    return (
        <div className="flex mt-4 flex-col">
            <SortButtons />
            <Content />
        </div>
    )
}

export default HistorySection