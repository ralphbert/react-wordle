export function Modal(props: any) {
    return (
        <>
            <div className="modal-backdrop">
                <div className="modal-container animate__animated animate__fadeInDown animate__faster">
                    <div className="modal">{ props.children }</div>
                </div>
            </div>
        </>
    )
}
