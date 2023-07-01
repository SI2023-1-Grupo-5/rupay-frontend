import Link from 'next/link.js';
import {EscolhaOCampus, Head, HeadChild, Rupay, ButtonBack, ButtonLocal, CardpioSeleoDeCampusRoot, AlignButtons} from './style.js';

export default function Select_menu(){

  return (
    <CardpioSeleoDeCampusRoot>
        <Head>
            <Link href={"/"}>
              <ButtonBack fontSize='large'/>
            </Link>
            <HeadChild alt="logo" src="/logo_rupay.svg" />
            <Rupay>RUPay</Rupay>
        </Head>
        <EscolhaOCampus>Escolha o Campus</EscolhaOCampus>
        <AlignButtons>
            <Link href='/consultMenu/menu/1'>
              <ButtonLocal
              sx={{ width: 300 }}
              variant="contained"
              name="button_darcy"
              size="large"
              >
              Darcy Ribeiro
              </ButtonLocal>        
            </Link>
            <Link href='/consultMenu/menu/2'>
              <ButtonLocal
              sx={{ width: 300 }}
              variant="contained"
              name="button_name"
              size="large"
              >
              Ceilândia
              </ButtonLocal>
            </Link>
            <Link href='/consultMenu/menu/3'>
              <ButtonLocal
              sx={{ width: 300 }}
              variant="contained"
              name="button_gama"
              size="large"
              >
              Gama
              </ButtonLocal>
            </Link>
            <Link href='/consultMenu/menu/4'>
              <ButtonLocal
              sx={{ width: 300 }}
              variant="contained"
              name="button_plan"
              size="large"
              >
              Planaltina
              </ButtonLocal>
            </Link>
        </AlignButtons>

    </CardpioSeleoDeCampusRoot>
  );
};

