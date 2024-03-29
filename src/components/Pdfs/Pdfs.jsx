import { useState } from "react";
import "./Pdfs.css";
import biopren_csotany from "../../data/BIOPREN-csotanyirto-gel_hu.pdf";
import biopren_hangyairto from "../../data/BIOPREN-hangyairto-gel_hu.pdf";
import gohkilaht from "../../data/Gokilaht_10MC_rovarirto_koncentratum_hu_v1.pdf";
import peststop_10ec from "../../data/PESTSTOP_10EC_rovarirto_koncentratum.pdf";
import peststop_combi from "../../data/PestStop_Combi_8_CS_rovarirto_koncentratum_hu_v7.pdf";
import protect_pro from "../../data/PROTECT-PRO-paraffinos-ragcsaloirto-blokk_hu.pdf";
import antivespe from "../../data/ANTIVESPE_darazsirto_aeroszol_biztonsagi_adatlap_doc.pdf";
import bombex_farumy from "../../data/Bombex_Farumy.pdf";
import cleankill from "../../data/cleankill.pdf";
import protect_darazsirto from "../../data/Protect_darazsirto_aeroszol_hu_v5.pdf";
import protectr_forte_rovarirto from "../../data/PROTECTr_Forte_rovarirto_porozoszer_hu_v3.pdf";
import biopren_6_agyipoloska from "../../data/BIOPREN_6_EC_agyi_poloska-es_bolhairto_koncentratum_hu_v7.pdf";
import deltasect from "../../data/Deltasect_HU4.pdf";
import pesguard_koncentratum from "../../data/PESGUARD-B_koncentratum_MSDS_3v_160601.pdf";
import pyregreen_koncentratum from "../../data/Pyregreen_rovairto_koncentratum_MSDS.pdf";
import dk_koncentratum from "../../data/Dk-10.2-Rovarirto-Koncentratum_hu_v4.pdf";
import magnum_hangya from "../../data/Magnum_hangyairto_gel_MSDS_HU3.pdf";
import { PdfGroup } from "./PdfGroup";

function Pdfs({ setShowPdfs }) {
  const [selected, setSelected] = useState("");

  const data = {
    biopren: {
      brand: "BIOPREN",
      documents: [
        {
          displayName: "BIOPREN csótányirtó gél",
          downloadName: "BIOPREN-csotanyirto-gel_hu",
          href: biopren_csotany,
        },
        {
          displayName: "BIOPREN hangyairtó gél",
          downloadName: "BIOPREN-hangyairto-gel_hu",
          href: biopren_hangyairto,
        },
        {
          displayName: "BIOPREN 6 EC ágyi poloska-és bolhairtó koncentrátum",
          downloadName:
            "BIOPREN_6_EC_agyi_poloska-es_bolhairto_koncentratum_hu_v7",
          href: biopren_6_agyipoloska,
        },
      ],
    },
    peststop: {
      brand: "PESTSTOP",
      documents: [
        {
          displayName: "PESTSTOP 10EC rovarirtó koncentrátum",
          downloadName: "PESTSTOP_10EC_rovarirto_koncentratum",
          href: peststop_10ec,
        },
        {
          displayName: "PESTSTOP Combi 8 CS rovarirtó koncentrátum",
          downloadName: "PESTSTOP_Combi_8_CS_rovarirto_koncentratum_hu_v7",
          href: peststop_combi,
        },
      ],
    },
    protect: {
      brand: "PROTECT",
      documents: [
        {
          displayName: "PROTECT PRO paraffinos rágcsálóirtó blokk",
          downloadName: "PROTECT-PRO-paraffinos-ragcsaloirto-blokk_hu",
          href: protect_pro,
        },
        {
          displayName: "PROTECT darázsirtó aeroszol",
          downloadName: "Protect_darazsirto_aeroszol_hu_v5",
          href: protect_darazsirto,
        },
        {
          displayName: "PROTECT Forte rovarirtó porozószer",
          downloadName: "PROTECTr_Forte_rovarirto_porozoszer_hu_v3",
          href: protectr_forte_rovarirto,
        },
      ],
    },
    antivespe: {
      brand: "ANTIVESPE",
      documents: [
        {
          displayName: "ANTIVESPE darázsirtó aeroszol",
          downloadName: "ANTIVESPE_darazsirto_aeroszol_biztonsagi_adatlap_doc",
          href: antivespe,
        },
      ],
    },
    bombex_farumy: {
      brand: "BOMBEX FARUMY",
      documents: [
        {
          displayName: "Bombex Farumy",
          downloadName: "Bombex_Farumy",
          href: bombex_farumy,
        },
      ],
    },
    deltasect: {
      brand: "DELTASECT",
      documents: [
        {
          displayName: "Deltasect",
          downloadName: "Deltasect_HU4",
          href: deltasect,
        },
      ],
    },
    pesguard: {
      brand: "PESGUARD",
      documents: [
        {
          displayName: "PESGUARD-B koncentrátum MSDS",
          downloadName: "PESGUARD-B_koncentratum_MSDS_3v_160601",
          href: pesguard_koncentratum,
        },
      ],
    },
    draker: {
      brand: "DRAKER",
      documents: [
        {
          displayName: "Dk 10.2 Rovarirtó koncentrátum",
          downloadName: "Dk-10.2-Rovarirto-Koncentratum_hu_v4",
          href: dk_koncentratum,
        },
      ],
    },
    cleankill: {
      brand: "CLEANKILL",
      documents: [
        {
          displayName: "Cleankill",
          downloadName: "cleankill",
          href: cleankill,
        },
      ],
    },
    magnum: {
      brand: "MAGNUM",
      documents: [
        {
          displayName: "Magnum hangyairtó gél MSDS HU3",
          downloadName: "Magnum_hangyairtó_gél_MSDS_HU3",
          href: magnum_hangya,
        },
      ],
    },
    pyregreen: {
      brand: "PYREGREEN",
      documents: [
        {
          displayName: "Pyregreen rovairtó koncentrátum MSDS",
          downloadName: "Pyregreen_rovairto_koncentratum_MSDS",
          href: pyregreen_koncentratum,
        },
      ],
    },
  };

  const dataKeys = Object.keys(data);

  const handleClick = (e) => {
    e.target.classList.contains("pdfBg") && setShowPdfs(false);
  };

  return (
    <div className="pdfBg" onClick={handleClick}>
      <div className="pdfContainer">
        <h3>Biztonsági tájékoztatók</h3>
        {dataKeys.map((key) => {
          return (
            <PdfGroup
              groupId={key}
              selected={selected}
              setSelected={setSelected}
              brand={data[key].brand}
              pdfList={data[key].documents}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Pdfs;
