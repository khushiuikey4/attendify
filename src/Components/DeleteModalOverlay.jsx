import s from "./DeleteModalOverlay.module.css"
function DeleteModalOverlay({ deleteSubject, undo }) {
    return <div className={s.modalOverlay}>
        <div className={s.subjectDeleteDialogueBox}>
            <div className={s.title}>Delete Subject</div>
            <div className={s.divider}></div>
            <div className={s.dialogueBox}>Are you sure you want to delete this subject attendence Information?</div>
            <div className={s.deleteDecisionButtons}>
                <button className={s.dBtn} onClick={undo}>No</button>
                <button className={`${s.dBtn} ${s.deleteBtn}`} onClick={deleteSubject}>Yes, Delete</button>
            </div>
        </div>
    </div>;
}
export default DeleteModalOverlay;