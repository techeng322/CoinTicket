import AnnounceSection from "./AnnounceSection"
import ProfileSection from "./ProfileSection"

const TopSection = () => {
    return (
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-4">
                <AnnounceSection />
            </div>
            <div className="col-span-1">
                <ProfileSection />
            </div>
        </div>
    )
}

export default TopSection