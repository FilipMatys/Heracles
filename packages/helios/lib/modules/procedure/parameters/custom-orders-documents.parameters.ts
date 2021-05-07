// Classes
import { HeliosProcedureParameter } from "../classes/parameter.class";
import { HeliosProcedureParameters } from "../classes/parameters.class";

// Enums
import { HeliosProcedureParameterType } from "../enums/parameter-type.enum";

/**
 * Helios custom order documents procedure parameters
 * @description Parameters for custom order documents procedure
 */
export class HeliosCustomOrdersDocumentsProcedureParameters extends HeliosProcedureParameters {
    protected rada: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Rada", HeliosProcedureParameterType.NVARCHAR);
    public get Rada(): string | undefined | null { return this.rada.Value; };
    public set Rada(value: string | undefined | null) { this.rada.Value = value; };

    protected iDSklad: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDSklad", HeliosProcedureParameterType.INT);
    public get IDSklad(): number | undefined | null { return this.iDSklad.Value; };
    public set IDSklad(value: number | undefined | null) { this.iDSklad.Value = value; };

    protected cisloOrg: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CisloOrg", HeliosProcedureParameterType.INT);
    public get CisloOrg(): number | undefined | null { return this.cisloOrg.Value; };
    public set CisloOrg(value: number | undefined | null) { this.cisloOrg.Value = value; };

    protected dic: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("DIC", HeliosProcedureParameterType.NVARCHAR);
    public get DIC(): string | undefined | null { return this.dic.Value; };
    public set DIC(value: string | undefined | null) { this.dic.Value = value; };

    protected prijemce: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Prijemce", HeliosProcedureParameterType.INT);
    public get Prijemce(): number | undefined | null { return this.prijemce.Value; };
    public set Prijemce(value: number | undefined | null) { this.prijemce.Value = value; };

    protected mistoUrceni: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("MistoUrceni", HeliosProcedureParameterType.INT);
    public get MistoUrceni(): number | undefined | null { return this.mistoUrceni.Value; };
    public set MistoUrceni(value: number | undefined | null) { this.mistoUrceni.Value = value; };

    protected datumPripadu: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatumPripadu", HeliosProcedureParameterType.DATETIME);
    public get DatumPripadu(): Date | undefined | null { return this.datumPripadu.Value; };
    public set DatumPripadu(value: Date | undefined | null) { this.datumPripadu.Value = value; };

    protected datumDodavky: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatumDodavky", HeliosProcedureParameterType.DATETIME);
    public get DatumDodavky(): Date | undefined | null { return this.datumDodavky.Value; };
    public set DatumDodavky(value: Date | undefined | null) { this.datumDodavky.Value = value; };

    protected terminDodavky: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("TerminDodavky", HeliosProcedureParameterType.NVARCHAR);
    public get TerminDodavky(): string | undefined | null { return this.terminDodavky.Value; };
    public set TerminDodavky(value: string | undefined | null) { this.terminDodavky.Value = value; };

    protected hlidanoDatOd: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("HlidanoDatOd", HeliosProcedureParameterType.DATETIME);
    public get HlidanoDatOd(): Date | undefined | null { return this.hlidanoDatOd.Value; };
    public set HlidanoDatOd(value: Date | undefined | null) { this.hlidanoDatOd.Value = value; };

    protected hlidanoDatDo: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("HlidanoDatDo", HeliosProcedureParameterType.DATETIME);
    public get HlidanoDatDo(): Date | undefined | null { return this.hlidanoDatDo.Value; };
    public set HlidanoDatDo(value: Date | undefined | null) { this.hlidanoDatDo.Value = value; };

    protected stav: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Stav", HeliosProcedureParameterType.NVARCHAR);
    public get Stav(): string | undefined | null { return this.stav.Value; };
    public set Stav(value: string | undefined | null) { this.stav.Value = value; };

    protected popisDodavky: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("PopisDodavky", HeliosProcedureParameterType.NVARCHAR);
    public get PopisDodavky(): string | undefined | null { return this.popisDodavky.Value; };
    public set PopisDodavky(value: string | undefined | null) { this.popisDodavky.Value = value; };

    protected externiCislo: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("ExterniCislo", HeliosProcedureParameterType.NVARCHAR);
    public get ExterniCislo(): string | undefined | null { return this.externiCislo.Value; };
    public set ExterniCislo(value: string | undefined | null) { this.externiCislo.Value = value; };

    protected mena: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Mena", HeliosProcedureParameterType.NVARCHAR);
    public get Mena(): string | undefined | null { return this.mena.Value; };
    public set Mena(value: string | undefined | null) { this.mena.Value = value; };

    protected kurz: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Kurz", HeliosProcedureParameterType.NUMERIC);
    public get Kurz(): number | undefined | null { return this.kurz.Value; };
    public set Kurz(value: number | undefined | null) { this.kurz.Value = value; };

    protected jednotkaMeny: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("JednotkaMeny", HeliosProcedureParameterType.INT);
    public get JednotkaMeny(): number | undefined | null { return this.jednotkaMeny.Value; };
    public set JednotkaMeny(value: number | undefined | null) { this.jednotkaMeny.Value = value; };

    protected kurzEuro: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("KurzEuro", HeliosProcedureParameterType.NUMERIC);
    public get KurzEuro(): number | undefined | null { return this.kurzEuro.Value; };
    public set KurzEuro(value: number | undefined | null) { this.kurzEuro.Value = value; };

    protected vstupniCena: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("VstupniCena", HeliosProcedureParameterType.TINYINT);
    public get VstupniCena(): number | undefined | null { return this.vstupniCena.Value; };
    public set VstupniCena(value: number | undefined | null) { this.vstupniCena.Value = value; };

    protected zaokrouhlitNa50: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZaokrouhlitNa50", HeliosProcedureParameterType.SMALLINT);
    public get ZaokrouhlitNa50(): number | undefined | null { return this.zaokrouhlitNa50.Value; };
    public set ZaokrouhlitNa50(value: number | undefined | null) { this.zaokrouhlitNa50.Value = value; };

    protected zaokrouhleni: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Zaokrouhleni", HeliosProcedureParameterType.SMALLINT);
    public get Zaokrouhleni(): number | undefined | null { return this.zaokrouhleni.Value; };
    public set Zaokrouhleni(value: number | undefined | null) { this.zaokrouhleni.Value = value; };

    protected zaokrouhleniVal: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZaokrouhleniVal", HeliosProcedureParameterType.SMALLINT);
    public get ZaokrouhleniVal(): number | undefined | null { return this.zaokrouhleniVal.Value; };
    public set ZaokrouhleniVal(value: number | undefined | null) { this.zaokrouhleniVal.Value = value; };

    protected koeficientDPH: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("KoeficientDPH", HeliosProcedureParameterType.BIT);
    public get KoeficientDPH(): boolean | undefined | null { return this.koeficientDPH.Value; };
    public set KoeficientDPH(value: boolean | undefined | null) { this.koeficientDPH.Value = value; };

    protected hlaPoziceZaokrDPH: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("HlaPoziceZaokrDPH", HeliosProcedureParameterType.TINYINT);
    public get HlaPoziceZaokrDPH(): number | undefined | null { return this.hlaPoziceZaokrDPH.Value; };
    public set HlaPoziceZaokrDPH(value: number | undefined | null) { this.hlaPoziceZaokrDPH.Value = value; };

    protected hlaHraniceZaokrDPH: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("HlaHraniceZaokrDPH", HeliosProcedureParameterType.TINYINT);
    public get HlaHraniceZaokrDPH(): number | undefined | null { return this.hlaHraniceZaokrDPH.Value; };
    public set HlaHraniceZaokrDPH(value: number | undefined | null) { this.hlaHraniceZaokrDPH.Value = value; };

    protected polPoziceZaokrDPH: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("PolPoziceZaokrDPH", HeliosProcedureParameterType.TINYINT);
    public get PolPoziceZaokrDPH(): number | undefined | null { return this.polPoziceZaokrDPH.Value; };
    public set PolPoziceZaokrDPH(value: number | undefined | null) { this.polPoziceZaokrDPH.Value = value; };

    protected polHraniceZaokrDPH: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("PolHraniceZaokrDPH", HeliosProcedureParameterType.TINYINT);
    public get PolHraniceZaokrDPH(): number | undefined | null { return this.polHraniceZaokrDPH.Value; };
    public set PolHraniceZaokrDPH(value: number | undefined | null) { this.polHraniceZaokrDPH.Value = value; };

    protected zaokrDPHvaluty: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZaokrDPHvaluty", HeliosProcedureParameterType.TINYINT);
    public get ZaokrDPHvaluty(): number | undefined | null { return this.zaokrDPHvaluty.Value; };
    public set ZaokrDPHvaluty(value: number | undefined | null) { this.zaokrDPHvaluty.Value = value; };

    protected zaokrDPHMalaCisla: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZaokrDPHMalaCisla", HeliosProcedureParameterType.TINYINT);
    public get ZaokrDPHMalaCisla(): number | undefined | null { return this.zaokrDPHMalaCisla.Value; };
    public set ZaokrDPHMalaCisla(value: number | undefined | null) { this.zaokrDPHMalaCisla.Value = value; };

    protected iDCenik: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDCenik", HeliosProcedureParameterType.INT);
    public get IDCenik(): number | undefined | null { return this.iDCenik.Value; };
    public set IDCenik(value: number | undefined | null) { this.iDCenik.Value = value; };

    protected iDFormaUhrady: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDFormaUhrady", HeliosProcedureParameterType.INT);
    public get IDFormaUhrady(): number | undefined | null { return this.iDFormaUhrady.Value; };
    public set IDFormaUhrady(value: number | undefined | null) { this.iDFormaUhrady.Value = value; };

    protected iDFormaDopravy: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDFormaDopravy", HeliosProcedureParameterType.INT);
    public get IDFormaDopravy(): number | undefined | null { return this.iDFormaDopravy.Value; };
    public set IDFormaDopravy(value: number | undefined | null) { this.iDFormaDopravy.Value = value; };

    protected iDBankSpojeni: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDBankSpojeni", HeliosProcedureParameterType.INT);
    public get IDBankSpojeni(): number | undefined | null { return this.iDBankSpojeni.Value; };
    public set IDBankSpojeni(value: number | undefined | null) { this.iDBankSpojeni.Value = value; };

    protected konstSymbol: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("KonstSymbol", HeliosProcedureParameterType.NVARCHAR);
    public get KonstSymbol(): string | undefined | null { return this.konstSymbol.Value; };
    public set KonstSymbol(value: string | undefined | null) { this.konstSymbol.Value = value; };

    protected iDStredNaklad: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDStredNaklad", HeliosProcedureParameterType.INT);
    public get IDStredNaklad(): number | undefined | null { return this.iDStredNaklad.Value; };
    public set IDStredNaklad(value: number | undefined | null) { this.iDStredNaklad.Value = value; };

    protected iDZakazka: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDZakazka", HeliosProcedureParameterType.INT);
    public get IDZakazka(): number | undefined | null { return this.iDZakazka.Value; };
    public set IDZakazka(value: number | undefined | null) { this.iDZakazka.Value = value; };

    protected iDNOkruh: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDNOkruh", HeliosProcedureParameterType.INT);
    public get IDNOkruh(): number | undefined | null { return this.iDNOkruh.Value; };
    public set IDNOkruh(value: number | undefined | null) { this.iDNOkruh.Value = value; };

    protected iDZam: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDZam", HeliosProcedureParameterType.INT);
    public get IDZam(): number | undefined | null { return this.iDZam.Value; };
    public set IDZam(value: number | undefined | null) { this.iDZam.Value = value; };

    protected iDVozidlo: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDVozidlo", HeliosProcedureParameterType.INT);
    public get IDVozidlo(): number | undefined | null { return this.iDVozidlo.Value; };
    public set IDVozidlo(value: number | undefined | null) { this.iDVozidlo.Value = value; };

    protected iDKontaktZam: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDKontaktZam", HeliosProcedureParameterType.INT);
    public get IDKontaktZam(): number | undefined | null { return this.iDKontaktZam.Value; };
    public set IDKontaktZam(value: number | undefined | null) { this.iDKontaktZam.Value = value; };

    protected iDKontaktOsoba: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDKontaktOsoba", HeliosProcedureParameterType.INT);
    public get IDKontaktOsoba(): number | undefined | null { return this.iDKontaktOsoba.Value; };
    public set IDKontaktOsoba(value: number | undefined | null) { this.iDKontaktOsoba.Value = value; };

    protected interniPoznamka: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("InterniPoznamka", HeliosProcedureParameterType.NVARCHAR);
    public get InterniPoznamka(): string | undefined | null { return this.interniPoznamka.Value; };
    public set InterniPoznamka(value: string | undefined | null) { this.interniPoznamka.Value = value; };

    protected verejnaPoznamka: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("VerejnaPoznamka", HeliosProcedureParameterType.NVARCHAR);
    public get VerejnaPoznamka(): string | undefined | null { return this.verejnaPoznamka.Value; };
    public set VerejnaPoznamka(value: string | undefined | null) { this.verejnaPoznamka.Value = value; };

    protected verejnaPoznamka2: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("VerejnaPoznamka2", HeliosProcedureParameterType.NVARCHAR);
    public get VerejnaPoznamka2(): string | undefined | null { return this.verejnaPoznamka2.Value; };
    public set VerejnaPoznamka2(value: string | undefined | null) { this.verejnaPoznamka2.Value = value; };

    protected verejnaPoznamka3: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("VerejnaPoznamka3", HeliosProcedureParameterType.NVARCHAR);
    public get VerejnaPoznamka3(): string | undefined | null { return this.verejnaPoznamka3.Value; };
    public set VerejnaPoznamka3(value: string | undefined | null) { this.verejnaPoznamka3.Value = value; };

    protected verejnaPoznamka4: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("VerejnaPoznamka4", HeliosProcedureParameterType.NVARCHAR);
    public get VerejnaPoznamka4(): string | undefined | null { return this.verejnaPoznamka4.Value; };
    public set VerejnaPoznamka4(value: string | undefined | null) { this.verejnaPoznamka4.Value = value; };

    protected vypocetSumaKcPoZao: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("VypocetSumaKcPoZao", HeliosProcedureParameterType.TINYINT);
    public get VypocetSumaKcPoZao(): number | undefined | null { return this.vypocetSumaKcPoZao.Value; };
    public set VypocetSumaKcPoZao(value: number | undefined | null) { this.vypocetSumaKcPoZao.Value = value; };

    protected datumSplatnoRPT: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatumSplatnoRPT", HeliosProcedureParameterType.DATETIME);
    public get DatumSplatnoRPT(): Date | undefined | null { return this.datumSplatnoRPT.Value; };
    public set DatumSplatnoRPT(value: Date | undefined | null) { this.datumSplatnoRPT.Value = value; };

    protected datumKurzu: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatumKurzu", HeliosProcedureParameterType.DATETIME);
    public get DatumKurzu(): Date | undefined | null { return this.datumKurzu.Value; };
    public set DatumKurzu(value: Date | undefined | null) { this.datumKurzu.Value = value; };

    protected castkaRPT: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CastkaRPT", HeliosProcedureParameterType.NUMERIC);
    public get CastkaRPT(): number | undefined | null { return this.castkaRPT.Value; };
    public set CastkaRPT(value: number | undefined | null) { this.castkaRPT.Value = value; };

    protected castkaRPTCM: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CastkaRPTCM", HeliosProcedureParameterType.NUMERIC);
    public get CastkaRPTCM(): number | undefined | null { return this.castkaRPTCM.Value; };
    public set CastkaRPTCM(value: number | undefined | null) { this.castkaRPTCM.Value = value; };

    protected ptru: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("PTRU", HeliosProcedureParameterType.BIT);
    public get PTRU(): boolean | undefined | null { return this.ptru.Value; };
    public set PTRU(value: boolean | undefined | null) { this.ptru.Value = value; };

    protected pTRUCastka: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("PTRUCastka", HeliosProcedureParameterType.NUMERIC);
    public get PTRUCastka(): number | undefined | null { return this.pTRUCastka.Value; };
    public set PTRUCastka(value: number | undefined | null) { this.pTRUCastka.Value = value; };

    protected pTRUCastkaCM: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("PTRUCastkaCM", HeliosProcedureParameterType.NUMERIC);
    public get PTRUCastkaCM(): number | undefined | null { return this.pTRUCastkaCM.Value; };
    public set PTRUCastkaCM(value: number | undefined | null) { this.pTRUCastkaCM.Value = value; };

    protected splneno: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("Splneno", HeliosProcedureParameterType.BIT);
    public get Splneno(): boolean | undefined | null { return this.splneno.Value; };
    public set Splneno(value: boolean | undefined | null) { this.splneno.Value = value; };

    protected sazbaDPH: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SazbaDPH", HeliosProcedureParameterType.NUMERIC);
    public get SazbaDPH(): number | undefined | null { return this.sazbaDPH.Value; };
    public set SazbaDPH(value: number | undefined | null) { this.sazbaDPH.Value = value; };

    protected tiskovyForm: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("TiskovyForm", HeliosProcedureParameterType.INT);
    public get TiskovyForm(): number | undefined | null { return this.tiskovyForm.Value; };
    public set TiskovyForm(value: number | undefined | null) { this.tiskovyForm.Value = value; };
}