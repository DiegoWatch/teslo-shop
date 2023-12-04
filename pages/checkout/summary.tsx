import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { CartList, OrderSummary } from "../../components/cart";

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de la orden' pageDescription='Resumen de la orden'>
        <Typography variant='h1' component='h1'>Resumen</Typography>

        <Grid container>
          <Grid item xs={ 12 } sm={ 7 }>
            <CartList />
          </Grid>
          <Grid item xs={ 12 } sm={ 5 }>
            <Card>
              <CardContent>
                <Typography variant='h2'>Resumen (3 productos)</Typography>
                <Divider sx={{ my: 1 }} />

                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography variant='subtitle1'>Dirección de entrega</Typography>
                    <NextLink href='/checkout/address' passHref>
                        <Link underline='always'>
                            Editar
                        </Link>
                    </NextLink>
                </Box>

                <Typography>Diego Noriega</Typography>
                <Typography>323 Algo</Typography>
                <Typography>Barranquilla</Typography>
                <Typography>Colombia</Typography>
                <Typography>3053222324</Typography>

                <Divider sx={{ my: 1 }} />

                <Box display='flex' justifyContent='end'>
                    <NextLink href='/cart' passHref>
                        <Link underline='always'>
                            Editar
                        </Link>
                    </NextLink>
                </Box>

                <OrderSummary />

                <Box sx={{ mt: 3 }}>
                  <Button color='secondary' className='circular-btn' fullWidth>
                    Confirmar Orden
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage