import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;

    @media (max-width: 576px) {
        gap: 0px;
    }
`;

const BannerText = styled.div`
    text-align: center;
    color: white;
    font-size: 24px;
    font-family: Roboto;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word;
    background: #A07E4B;
    height: 60px;
    width: 80%;
    align-items: center;

    @media (max-width: 576px) {
        height: 30px;
        font-size: 12px;
        line-height: 10px;
        background: red;
        width: 100%;
    }
`;

const Banner = () => (
    <BannerContainer>
        <BannerText>
            <p>¡Regala con Siman!</p>
        </BannerText>
    </BannerContainer>
);


export default Banner;
