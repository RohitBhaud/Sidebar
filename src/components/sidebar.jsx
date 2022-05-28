// import { VStack, Box,StackDivider,} from '@chakra-ui/react'
import { Grid,GridItem} from '@chakra-ui/react'
import { Leftside } from './leftside'


function Sidebar(){
    return(
        
        <div >
   <Grid
  h='700px'
  templateRows='repeat(1, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={1}
>
  <GridItem rowSpan={2} colSpan={1} bg='white' >
     <Leftside/>
      </GridItem> 
  <GridItem colSpan={4} bg='lightgray' ></GridItem> 
</Grid>
  
        </div>
    )
}
export {Sidebar}