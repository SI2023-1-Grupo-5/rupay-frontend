import Link from 'next/link.js';
import {EscolhaOCampus, Head, HeadChild, Rupay, ButtonBack, ButtonLocal, CardpioSeleoDeCampusRoot, AlignButtons} from './style.js';

export default function Select_menu(){

  return (
    <CardpioSeleoDeCampusRoot>
        <Head>
            <HeadChild alt="logo" src="/logo_rupay.svg" />
            <Rupay>RUPay</Rupay>
            <Link href={"/"}>
              <ButtonBack fontSize='large'/>
            </Link>
        </Head>
        <EscolhaOCampus>Escolha o Campus</EscolhaOCampus>
        <AlignButtons>
            <ButtonLocal
            sx={{ width: 300 }}
            variant="contained"
            name="button_darcy"
            size="large"
            >
            Darcy Ribeiro
            </ButtonLocal>

            <ButtonLocal
            sx={{ width: 300 }}
            variant="contained"
            name="button_name"
            size="large"
            >
            Ceilândia
            </ButtonLocal>

            <ButtonLocal
            sx={{ width: 300 }}
            variant="contained"
            name="button_gama"
            size="large"
            >
            Gama
            </ButtonLocal>
            <ButtonLocal
            sx={{ width: 300 }}
            variant="contained"
            name="button_plan"
            size="large"
            >
            Planaltina
            </ButtonLocal>
        </AlignButtons>

    </CardpioSeleoDeCampusRoot>
  );
};

