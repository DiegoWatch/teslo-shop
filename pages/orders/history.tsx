import NextLink from 'next/link';
import { Chip, Grid, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ShopLayout } from "../../components/layouts";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información si está pagada o no',
        width: 200,
        renderCell: (params: GridRenderCellParams) => {

            return params.row.paid 
            ? <Chip color="success"  label='Pagada' variant="outlined"/>
            : <Chip color="error"  label='No Pagada' variant="outlined"/>
        }
    },

    {
        field: 'orden',
        headerName: 'Ver orden',
        width: 200,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {

            return (
                <NextLink href={`/orders/${ params.row.id }`} passHref>
                    <Link underline='always'>
                        Ver orden
                    </Link>
                </NextLink>
            )
        }
    },

];

const rows = [
    { id: 1, paid: true, fullname: 'Fernando Herrera', orden: true },
    { id: 2, paid: false, fullname: 'Melissa Flores', orden: true },
    { id: 3, paid: true, fullname: 'Natalia Herrera', orden: true },
    { id: 4, paid: false, fullname: 'Emin Reyes', orden: true },
];

const HistoryPage = () => {
  return (
    <ShopLayout title={"Historial de ordenes"} pageDescription={"Historial de ordenes de clientes"}>
        <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

        <Grid container>
            <Grid item xs={ 12 } sx={{ height: 650, width: '100%' }}>
                <DataGrid 
                    columns={ columns } 
                    rows={ rows }
                    initialState={{
                        pagination: { 
                          paginationModel: { pageSize: 5 } 
                        },
                      }}
                      pageSizeOptions={[5, 10, 25]}
                                 
                />
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage