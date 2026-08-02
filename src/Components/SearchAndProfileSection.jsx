import s from "./SearchAndProfileSection.module.css"
import { IoMdPerson } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";
function SearchAndProfileSection() {
    return <div className={s.searchAndProfileContainer}>
        <div className={s.searchBarContainer}>
            <input className={s.subjectSearchInput} placeholder="Search Subject" />
            <div className={s.searchIcon}><MdOutlineSearch />
            </div>
        </div>
        <div className={s.profileContainer}>
            <IoMdPerson />
        </div>
    </div>;
}
export default SearchAndProfileSection;