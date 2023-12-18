function CustomDateMenu() {
  return (
        <button onClick={handleMenuToggle} style={{ 
            position: 'relative', 
            borderRadius: '5px',
            outline: 'none',
            cursor: 'pointer',
            border: '1px solid rgba(0,0,0,0.2)'
            }}
            ref={menuRef}
            >
            <Typography sx={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'primary.dark'}}>
                {(chosenDate === 'Select Start Date') && <CalendarMonthIcon fontSize='12px'/>}
                {chosenDate} 
                {(chosenDate != 'Select Start Date') && 

                <button style={{ 
                    border: 'none', 
                    backgroundColor: 'none',
                    cursor: 'pointer',
                    paddingInline: '0px',
                    marginInline: '0px',
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '5px'
                }} 
                onClick={() => setChosenDate("Select Start Date")}
                size='small'>
                    <CloseIcon sx={{color: 'primary.dark', fontSize: '13px'}}/>
                </button> 
                }
            </Typography>
            {
                isOpen && 
                <CustomDatePicker handleChange={handleChange}/>
            }
        </button>
  )
}

export default CustomDateMenu
