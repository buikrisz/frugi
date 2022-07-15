import React from 'react';
import './Pdfs.css';
import biopren_csotany from '../../data/BIOPREN-csotanyirto-gel_hu.pdf';
import biopren_hangyairto from '../../data/BIOPREN-hangyairto-gel_hu.pdf';
import gohkilaht from '../../data/Gokilaht_10MC_rovarirto_koncentratum_hu_v1.pdf';
import peststop_10ec from '../../data/PESTSTOP_10EC_rovarirto_koncentratum.pdf';
import peststop_combi from '../../data/PestStop_Combi_8_CS_rovarirto_koncentratum_hu_v7.pdf';
import protect_pro from '../../data/PROTECT-PRO-paraffinos-ragcsaloirto-blokk_hu.pdf';
import antivespe from '../../data/ANTIVESPE_darazsirto_aeroszol_biztonsagi_adatlap_doc.pdf';
import bombex_farumy from '../../data/Bombex_Farumy.pdf';
import cleankill from '../../data/cleankill.pdf';
import protect_darazsirto from '../../data/Protect_darazsirto_aeroszol_hu_v5.pdf';
import protectr_forte_rovarirto from '../../data/PROTECTr_Forte_rovarirto_porozoszer_hu_v3.pdf';
import biopren_6_agyipoloska from '../../data/BIOPREN_6_EC_agyi_poloska-es_bolhairto_koncentratum_hu_v7.pdf';
import deltasect from '../../data/Deltasect_HU4.pdf';
import pesguard_koncentratum from '../../data/PESGUARD-B_koncentratum_MSDS_3v_160601.pdf';
import msds_aquapy_rovarirto from '../../data/msds-Aquapy-Rovarirto-koncentratum-CLP-11789.pdf';
import { MdFileDownload } from 'react-icons/md';

function Pdfs({ setShowPdfs }) {
    function handleClick(e) {
        e.target.classList.contains("pdfBg") && setShowPdfs(false);
    }
    
    return (
        <div className='pdfBg' onClick={handleClick}>
            <div className='pdfContainer'>
                <h3>Biztonsági tájékoztatók</h3>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={biopren_csotany} download="BIOPREN-csotanyirto-gel_hu">BIOPREN csótányirtó gél</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={biopren_hangyairto} download="BIOPREN-hangyairto-gel_hu">BIOPREN hangyairtó gél</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={gohkilaht} download="Gokilaht_10MC_rovarirto_koncentratum_hu_v1">Gokilaht 10MC rovarirtó koncentrátum</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={peststop_10ec} download="PESTSTOP_10EC_rovarirto_koncentratum">PESTSTOP 10EC rovarirtó koncentrátum</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={peststop_combi} download="PestStop_Combi_8_CS_rovarirto_koncentratum_hu_v7">PestStop Combi 8 CS rovarirtó koncentrátum</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={protect_pro} download="PROTECT-PRO-paraffinos-ragcsaloirto-blokk_hu">PROTECT PRO paraffinos rágcsálóirtó blokk</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={antivespe} download="ANTIVESPE_darazsirto_aeroszol_biztonsagi_adatlap_doc">ANTIVESPE darázsirtó aeroszol</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={bombex_farumy} download="Bombex_Farumy">Bombex Farumy</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={protect_darazsirto} download="Protect_darazsirto_aeroszol_hu_v5">Protect darázsirtó aeroszol</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={protectr_forte_rovarirto} download="PROTECTr_Forte_rovarirto_porozoszer_hu_v3">PROTECTr Forte rovarirtó porozószer</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={biopren_6_agyipoloska} download="BIOPREN_6_EC_agyi_poloska-es_bolhairto_koncentratum_hu_v7">BIOPREN 6 EC ágyi poloska-és bolhairtó koncentrátum</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={deltasect} download="Deltasect_HU4">Deltasect</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={pesguard_koncentratum} download="PESGUARD-B_koncentratum_MSDS_3v_160601">PESGUARD-B koncentrátum MSDS</a>
                </div>
                <div>
                    <MdFileDownload className='pdfIcon' />
                    <a href={msds_aquapy_rovarirto} download="msds-Aquapy-Rovarirto-koncentratum-CLP-11789">MSDS Aquapy Rovarirtó koncentrátum</a>
                </div>
                <div className='lastDiv'>
                    <MdFileDownload className='pdfIcon' />
                    <a href={cleankill} download="cleankill">Cleankill</a>
                </div>
            </div>
        </div>
    )
}

export default Pdfs;