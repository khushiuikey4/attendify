import s from "./BodyComponent.module.css"
import { IoMdPerson } from "react-icons/io";
import SubjectCard from "./SubjectCard.jsx"
import { MdOutlineSearch } from "react-icons/md";
import { VscAddCompact } from "react-icons/vsc";
import SearchAndProfileSection from "./SearchAndProfileSection.jsx";
import ActionButtons from "./ActionButtons.jsx"
import DeleteModalOverlay from "./DeleteModalOverlay"
import { useState } from "react";

function BodyComponent() {
    let [showDeleteDialogue, setShowDeleteDialogue] = useState(false);
    let onDeleteHandle = (e) => {
        e.stopPropagation();
        setShowDeleteDialogue(true);
    }
    let deleteSubject = () => {
        setShowDeleteDialogue(false);
    }
    let undo = () => {
        setShowDeleteDialogue(false);
    }

    return <div className={s.bodyContainer}>
        <SearchAndProfileSection></SearchAndProfileSection>
        <ActionButtons></ActionButtons>
        {showDeleteDialogue && <DeleteModalOverlay deleteSubject={deleteSubject} undo={undo}></DeleteModalOverlay>}
        <div className={s.subjectCardContainer}>
            <SubjectCard onDeleteHandle={onDeleteHandle}></SubjectCard>
            <SubjectCard onDeleteHandle={onDeleteHandle}></SubjectCard>
            <SubjectCard onDeleteHandle={onDeleteHandle}></SubjectCard>
            <SubjectCard onDeleteHandle={onDeleteHandle}></SubjectCard>
            <SubjectCard onDeleteHandle={onDeleteHandle}></SubjectCard>
            <SubjectCard onDeleteHandle={onDeleteHandle}></SubjectCard>
            <SubjectCard onDeleteHandle={onDeleteHandle}></SubjectCard>
            <SubjectCard onDeleteHandle={onDeleteHandle}></SubjectCard>
            <SubjectCard onDeleteHandle={onDeleteHandle}></SubjectCard>
            <SubjectCard onDeleteHandle={onDeleteHandle}></SubjectCard>
            <SubjectCard onDeleteHandle={onDeleteHandle}></SubjectCard>
        </div>
    </div>;
}
export default BodyComponent;