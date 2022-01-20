import React, { useState } from 'react';
import { Box, Grid, Container } from 'theme-ui';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import BlockTitle from 'components/block-title';
import PriceCard from '../components/price-card';

const pricingMonthlyData = [
  // {
  //   name: 'Free Plan',
  //   description: 'For Small teams or office',
  //   buttonText: 'Start free trail',
  //   points: [
  //     {
  //       icon: <IoIosCheckmarkCircle />,
  //       text: 'Ultimate access to all course, exercises and assessments',
  //       isAvailable: true,
  //     },
  //     {
  //       icon: <IoIosCheckmarkCircle />,
  //       text: 'Free acess for all kind of exercise corrections with downloads.',
  //       isAvailable: true,
  //     },
  //     {
  //       icon: <IoIosCheckmarkCircle />,
  //       text: 'Total assessment corrections with free download access system',
  //       isAvailable: true,
  //     },
  //     {
  //       icon: <IoIosCloseCircle />,
  //       text: 'Unlimited download of courses on the mobile app contents',
  //       isAvailable: false,
  //     },
  //     {
  //       icon: <IoIosCloseCircle />,
  //       text: 'Download and print courses and exercises in PDF',
  //       isAvailable: false,
  //     },
  //   ],
  // },
  //Photo by RODNAE Productions from Pexels
  {
    name: 'Individual',
    description: 'Aprendisaje individual',
    descuentoHeader: '50%',
    showPrice: true,
    priceWithUnit: '$50.000/',

    pricePeriod: 'mes',
    buttonText: 'Suscríbete',
    url: 'https://www.mercadopago.com.co/checkout/v1/payment/redirect/a2ee5394-ac03-404d-baaa-f310e49b55e8/payment-option-form/?router-request-id=2f340c82-455e-4e30-b934-16bf2c9ae9a8&source=link&preference-id=585622478-5bdbe1e3-f127-4329-ac0d-291ab91c7dea&p=06e4c064b63d598fdbd076cf8f4b20f5#/',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Agendar clases según disponibilidad.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Clases virtuales.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Material de estudio.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Seguimiento.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Informes de progreso.',
        isAvailable: true,
      },
    ],
  },
  {
    header: 'Recomendado',
    name: 'Duo',
    description: 'Aprendizaje de en grupo',
    priceWithUnit: '$90.000/',
    descuentoHeader: '50%',
    pricePeriod: 'mes',
    buttonText: 'Suscríbete',
    url: 'https://www.mercadopago.com.co/checkout/v1/payment/redirect/a2ee5394-ac03-404d-baaa-f310e49b55e8/payment-option-form/?router-request-id=2f340c82-455e-4e30-b934-16bf2c9ae9a8&source=link&preference-id=585622478-5bdbe1e3-f127-4329-ac0d-291ab91c7dea&p=06e4c064b63d598fdbd076cf8f4b20f5#/',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Descuento por pareja.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Agendar clases según disponibilidad.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Clases virtuales.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Material de estudio.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Seguimiento.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Informes de progreso',
        isAvailable: true,
      },
    ],
  },
];

const pricingYearlyData = [
  {
    name: 'Free Plan',
    description: 'For Small teams or office',
    buttonText: 'Start free trail',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Free acess for all kind of exercise corrections with downloads.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Total assessment corrections with free download access system',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Unlimited download of courses on the mobile app contents',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Download and print courses and exercises in PDF',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recomendado',
    name: 'Individual Plan',
    description: 'For Small teams or office',
    buttonText: 'Start free trail',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Free acess for all kind of exercise corrections with downloads.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Total assessment corrections with free download access system',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Unlimited download of courses on the mobile app contents',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Download and print courses and exercises in PDF',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recommended',
    name: 'Premium',
    description: 'For startup enterprise',
    priceWithUnit: '$99.99/',
    pricePeriod: 'yr',
    buttonText: 'Subscribe Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Free acess for all kind of exercise corrections with downloads.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Total assessment corrections with free download access system',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Unlimited download of courses on the mobile app contents',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Download and print courses and exercises in PDF',
        isAvailable: true,
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState(false);
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          sx={styles.pricing.blockTitle}
          tagline="Precios"
          heading="Elige el plan de tu preferencia."
        />
        {/* <Box sx={styles.pricing.btnWrap}>
          <Box as="ul" sx={styles.pricing.btnUl}>
            <Box
              as="li"
              className={` ${plan === false ? 'active' : ''}`}
              variant="buttons.primary"
              sx={styles.pricing.btn}
              onClick={() => {
                setPlan(false);
              }}
            >
              Monthly Plan
            </Box>
            <Box
              as="li"
              className={` ${plan === true ? 'active' : ''}`}
              variant="buttons.primary"
              sx={styles.pricing.btn}
              onClick={() => {
                setPlan(true);
              }}
            >
              Annual Plan
            </Box>
          </Box>
        </Box> */}

        <Grid sx={styles.pricing.wrapper}>
          {plan === true
            ? pricingYearlyData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
          {plan === false
            ? pricingMonthlyData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  pricing: {
    paddingTop: 100,
    paddingBottom: 150,
    '@media(max-width:991px)': {
      paddingTop: 60,
      paddingBottom: 60,
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0)',
      },
    },
    '.priceFade': {
      animationName: 'fadeInUp',
      animationDuration: '1s',
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: 20
    },
    btnWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '60px',
      marginTop: '25px',
    },
    btnUl: {
      margin: 0,
      listStyle: 'none',
      backgroundColor: '#F7F8FB',
      padding: '6px',
      borderRadius: '5px',
      display: 'inline-block',
    },
    btn: {
      color: 'black',
      padding: '10px 25px',
      fontSize: 16,
      fontWeight: 500,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'black',
        backgroundColor: 'transparent',
      },
      '&.active': {
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
      },
      '@media(max-width: 375px)': {
        padding: '10px 22px',
      },
    },
    wrapper: {
      display: 'grid',
      gridGap: '30px',
      gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
      marginLeft: 'auto',
      marginRight: 'auto',
      width: ['100%', null, null, null, '990px'],
    },
  },
};
