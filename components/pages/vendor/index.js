import { useRouter } from "next/router";

import en from "../../../public/locales/en/translate";
import id from "../../../public/locales/id/translate";

import Wrapper from "../../layout/Wrapper";

import styles from "./Vendor.module.scss";

const Vendor = () => {
  const { locale } = useRouter();

  const t = locale === "en" ? en : id;

  const vendors = [
    { name: "stranka.planner", vendor: "decoration" },
    { name: "bennusorumba", vendor: "make up" },
    { name: "firmanuchilmakeup", vendor: "Mother & Sister make up" },
    { name: "sparklingsugar", vendor: "Mother & Sister make up" },
    { name: "azaliaclarissa", vendor: "Bride's attire" },
    { name: "kain_readytowear", vendor: "Groom's attire" },
    { name: "woko_s", vendor: "hair do" },
    { name: "ayyih", vendor: "hijab do" },
    { name: "vaia.bride", vendor: "shoes" },
    { name: "hampers.studio", vendor: "seserahan" },
    { name: "alfabetcatering", vendor: "catering" },
    { name: "music_al_atraf", vendor: "music" },
    { name: "tritynco", vendor: "documentation" },
    { name: "inspirasawedding", vendor: "documentation" },
    { name: "fotoboothindonesia", vendor: "Photo booth" },
    { name: "jasa.livestreaming.profesional", vendor: "Live Stream" },
    { name: "deflower_id", vendor: "bridal flower & corsage" },
    { name: "hnailbar", vendor: "nail art" },
  ];

  const _renderVendorItem = () => {
    return vendors.map(({ name, vendor }) => (
      <div className={styles.vendorItem} key={name}>
        <p>{vendor}:</p>
        <a
          href={`https://www.instagram.com/${name}`}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </div>
    ));
  };

  return (
    <Wrapper title="vendor">
      <h1 className={styles.title}>vendor</h1>
      <div className={styles.vendorsList}>{_renderVendorItem()}</div>
    </Wrapper>
  );
};

export default Vendor;
