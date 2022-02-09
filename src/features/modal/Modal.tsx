export function Modal(props: any) {
    return (
        <>
            <div className="modal-backdrop">
                <div className="modal-container">
                    <div className="modal">{ props.children }</div>
                </div>
            </div>
        </>
    )
}
