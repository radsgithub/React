const WarningLine = ({ counter, warning }) => (
    <>
        {(warning && counter <= 0) || (warning && counter >= 20) ? <div style={{ backgroundColor: '#F2DEDE', color: '#A94442', padding: '10px', borderRadius: '5px', border: '1px solid #A94442', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            {warning && counter <= 0 ? (
                <>
                    <span style={{ fontFamily: 'cursive', fontSize: '1.2rem', fontWeight: 'bold' }}>⚠ Warning:</span> You cannot go below zero.
                </>
            ) : warning && counter >= 20 ? (
                <>
                    <span style={{ fontFamily: 'cursive', fontSize: '1.2rem', fontWeight: 'bold' }}>⚠ Warning:</span> You cannot go above 20.
                </>
            ) : <></>}
        </div>
            : ""}
    </>

);



export default WarningLine