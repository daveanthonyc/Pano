import { Box } from '@mui/material'
import { ReactNode } from 'react'

function StyledBox({flex, justifyContent, alignItems, children}: {flex?: string, justifyContent?: string, alignItems?: string, children: ReactNode}) {
  return (
    <Box
        sx={{
            border: '1px solid',
            borderColor: 'border.main',
            borderRadius: '10px',
            display: `${flex}`,
            justifyContent: `${justifyContent}`,
            alignItems: `${alignItems}`,
            overflow: 'hidden'
        }}
    >{children}</Box>
  )
}

export default StyledBox;
