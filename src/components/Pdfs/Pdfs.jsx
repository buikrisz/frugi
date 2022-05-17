import React from 'react';
import './Pdfs.css';
import biopren_csotany from '../../data/BIOPREN-csotanyirto-gel_hu.pdf';
import biopren_hangyairto from '../../data/BIOPREN-hangyairto-gel_hu.pdf';
import gohkilaht from '../../data/Gokilaht_10MC_rovarirto_koncentratum_hu_v1.pdf';
import peststop_10ec from '../../data/PESTSTOP_10EC_rovarirto_koncentratum.pdf';
import peststop_combi from '../../data/PestStop_Combi_8_CS_rovarirto_koncentratum_hu_v7.pdf';
import protect_pro from '../../data/PROTECT-PRO-paraffinos-ragcsaloirto-blokk_hu.pdf';
import { MdFileDownload } from 'react-icons/md';

function Pdfs({ setShowPdfs }) {
  return (
    <div className='pdfBg' onClick={() => setShowPdfs(false)}>
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
            <div className='lastDiv'>
                <MdFileDownload className='pdfIcon' />
                <a href={protect_pro} download="PROTECT-PRO-paraffinos-ragcsaloirto-blokk_hu">PROTECT PRO paraffinos rágcsálóirtó blokk</a>
            </div>
        </div>
    </div>
  )
}

export default Pdfs;