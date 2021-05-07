// Classes
import { HeliosProcedureParameter } from "../classes/parameter.class";
import { HeliosProcedureParameters } from "../classes/parameters.class";

// Enums
import { HeliosProcedureParameterType } from "../enums/parameter-type.enum";

/**
 * Helios merchandise management transactions procedure parameters
 * @description Parameters for merchandise management transactions procedure
 */
export class HeliosMerchandiseManagementTransactionsProcedureParameters extends HeliosProcedureParameters {
    protected iDZboSklad: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDZboSklad", HeliosProcedureParameterType.INT);
    public get IDZboSklad(): number | undefined | null { return this.iDZboSklad.Value; };
    public set IDZboSklad(value: number | undefined | null) { this.iDZboSklad.Value = value; };

    protected iDDoklad: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDDoklad", HeliosProcedureParameterType.INT);
    public get IDDoklad(): number | undefined | null { return this.iDDoklad.Value; };
    public set IDDoklad(value: number | undefined | null) { this.iDDoklad.Value = value; };

    protected iDOldDoklad: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDOldDoklad", HeliosProcedureParameterType.INT);
    public get IDOldDoklad(): number | undefined | null { return this.iDOldDoklad.Value; };
    public set IDOldDoklad(value: number | undefined | null) { this.iDOldDoklad.Value = value; };

    protected nazevSozNa1: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("NazevSozNa1", HeliosProcedureParameterType.NVARCHAR);
    public get NazevSozNa1(): string | undefined | null { return this.nazevSozNa1.Value; };
    public set NazevSozNa1(value: string | undefined | null) { this.nazevSozNa1.Value = value; };

    protected nazevSozNa2: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("NazevSozNa2", HeliosProcedureParameterType.NVARCHAR);
    public get NazevSozNa2(): string | undefined | null { return this.nazevSozNa2.Value; };
    public set NazevSozNa2(value: string | undefined | null) { this.nazevSozNa2.Value = value; };

    protected nazevSozNa3: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("NazevSozNa3", HeliosProcedureParameterType.NVARCHAR);
    public get NazevSozNa3(): string | undefined | null { return this.nazevSozNa3.Value; };
    public set NazevSozNa3(value: string | undefined | null) { this.nazevSozNa3.Value = value; };

    protected popis4: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Popis4", HeliosProcedureParameterType.NVARCHAR);
    public get Popis4(): string | undefined | null { return this.popis4.Value; };
    public set Popis4(value: string | undefined | null) { this.popis4.Value = value; };

    protected cisloZakazky: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("CisloZakazky", HeliosProcedureParameterType.NVARCHAR);
    public get CisloZakazky(): string | undefined | null { return this.cisloZakazky.Value; };
    public set CisloZakazky(value: string | undefined | null) { this.cisloZakazky.Value = value; };

    protected iDVozidlo: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDVozidlo", HeliosProcedureParameterType.INT);
    public get IDVozidlo(): number | undefined | null { return this.iDVozidlo.Value; };
    public set IDVozidlo(value: number | undefined | null) { this.iDVozidlo.Value = value; };

    protected cisloZam: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CisloZam", HeliosProcedureParameterType.INT);
    public get CisloZam(): number | undefined | null { return this.cisloZam.Value; };
    public set CisloZam(value: number | undefined | null) { this.cisloZam.Value = value; };

    protected mj: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("MJ", HeliosProcedureParameterType.NVARCHAR);
    public get MJ(): string | undefined | null { return this.mj.Value; };
    public set MJ(value: string | undefined | null) { this.mj.Value = value; };

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

    protected sazbaDPH: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SazbaDPH", HeliosProcedureParameterType.NUMERIC);
    public get SazbaDPH(): number | undefined | null { return this.sazbaDPH.Value; };
    public set SazbaDPH(value: number | undefined | null) { this.sazbaDPH.Value = value; };

    protected sazbaSD: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SazbaSD", HeliosProcedureParameterType.NUMERIC);
    public get SazbaSD(): number | undefined | null { return this.sazbaSD.Value; };
    public set SazbaSD(value: number | undefined | null) { this.sazbaSD.Value = value; };

    protected zakazanoDPH: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZakazanoDPH", HeliosProcedureParameterType.TINYINT);
    public get ZakazanoDPH(): number | undefined | null { return this.zakazanoDPH.Value; };
    public set ZakazanoDPH(value: number | undefined | null) { this.zakazanoDPH.Value = value; };

    protected kolik: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Kolik", HeliosProcedureParameterType.INT);
    public get Kolik(): number | undefined | null { return this.kolik.Value; };
    public set Kolik(value: number | undefined | null) { this.kolik.Value = value; };

    protected povolitDuplicitu: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("PovolitDuplicitu", HeliosProcedureParameterType.BIT);
    public get PovolitDuplicitu(): boolean | undefined | null { return this.povolitDuplicitu.Value; };
    public set PovolitDuplicitu(value: boolean | undefined | null) { this.povolitDuplicitu.Value = value; };

    protected povolitBlokovane: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("PovolitBlokovane", HeliosProcedureParameterType.BIT);
    public get PovolitBlokovane(): boolean | undefined | null { return this.povolitBlokovane.Value; };
    public set PovolitBlokovane(value: boolean | undefined | null) { this.povolitBlokovane.Value = value; };

    protected mnozstvi: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Mnozstvi", HeliosProcedureParameterType.NUMERIC);
    public get Mnozstvi(): number | undefined | null { return this.mnozstvi.Value; };
    public set Mnozstvi(value: number | undefined | null) { this.mnozstvi.Value = value; };

    protected iDObalovanePolozky: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDObalovanePolozky", HeliosProcedureParameterType.INT);
    public get IDObalovanePolozky(): number | undefined | null { return this.iDObalovanePolozky.Value; };
    public set IDObalovanePolozky(value: number | undefined | null) { this.iDObalovanePolozky.Value = value; };

    protected vstupniCenaProPrepocet: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("VstupniCenaProPrepocet", HeliosProcedureParameterType.INT);
    public get VstupniCenaProPrepocet(): number | undefined | null { return this.vstupniCenaProPrepocet.Value; };
    public set VstupniCenaProPrepocet(value: number | undefined | null) { this.vstupniCenaProPrepocet.Value = value; };

    protected dotahovatZHlavicky: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("DotahovatZHlavicky", HeliosProcedureParameterType.BIT);
    public get DotahovatZHlavicky(): boolean | undefined | null { return this.dotahovatZHlavicky.Value; };
    public set DotahovatZHlavicky(value: boolean | undefined | null) { this.dotahovatZHlavicky.Value = value; };

    protected dotahovatSazby: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("DotahovatSazby", HeliosProcedureParameterType.BIT);
    public get DotahovatSazby(): boolean | undefined | null { return this.dotahovatSazby.Value; };
    public set DotahovatSazby(value: boolean | undefined | null) { this.dotahovatSazby.Value = value; };

    protected slevaDokladu: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaDokladu", HeliosProcedureParameterType.NUMERIC);
    public get SlevaDokladu(): number | undefined | null { return this.slevaDokladu.Value; };
    public set SlevaDokladu(value: number | undefined | null) { this.slevaDokladu.Value = value; };

    protected nabidka: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Nabidka", HeliosProcedureParameterType.INT);
    public get Nabidka(): number | undefined | null { return this.nabidka.Value; };
    public set Nabidka(value: number | undefined | null) { this.nabidka.Value = value; };

    protected hlidanoProOrg: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("HlidanoProOrg", HeliosProcedureParameterType.BIT);
    public get HlidanoProOrg(): boolean | undefined | null { return this.hlidanoProOrg.Value; };
    public set HlidanoProOrg(value: boolean | undefined | null) { this.hlidanoProOrg.Value = value; };

    protected orgProCeny: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("OrgProCeny", HeliosProcedureParameterType.INT);
    public get OrgProCeny(): number | undefined | null { return this.orgProCeny.Value; };
    public set OrgProCeny(value: number | undefined | null) { this.orgProCeny.Value = value; };

    protected slevaSkupZbo: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaSkupZbo", HeliosProcedureParameterType.NUMERIC);
    public get SlevaSkupZbo(): number | undefined | null { return this.slevaSkupZbo.Value; };
    public set SlevaSkupZbo(value: number | undefined | null) { this.slevaSkupZbo.Value = value; };

    protected slevaZboKmen: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaZboKmen", HeliosProcedureParameterType.NUMERIC);
    public get SlevaZboKmen(): number | undefined | null { return this.slevaZboKmen.Value; };
    public set SlevaZboKmen(value: number | undefined | null) { this.slevaZboKmen.Value = value; };

    protected slevaZboSklad: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaZboSklad", HeliosProcedureParameterType.NUMERIC);
    public get SlevaZboSklad(): number | undefined | null { return this.slevaZboSklad.Value; };
    public set SlevaZboSklad(value: number | undefined | null) { this.slevaZboSklad.Value = value; };

    protected slevaOrg: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaOrg", HeliosProcedureParameterType.NUMERIC);
    public get SlevaOrg(): number | undefined | null { return this.slevaOrg.Value; };
    public set SlevaOrg(value: number | undefined | null) { this.slevaOrg.Value = value; };

    protected slevaSozNa: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaSozNa", HeliosProcedureParameterType.NUMERIC);
    public get SlevaSozNa(): number | undefined | null { return this.slevaSozNa.Value; };
    public set SlevaSozNa(value: number | undefined | null) { this.slevaSozNa.Value = value; };

    protected vstupniCena: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("VstupniCena", HeliosProcedureParameterType.TINYINT);
    public get VstupniCena(): number | undefined | null { return this.vstupniCena.Value; };
    public set VstupniCena(value: number | undefined | null) { this.vstupniCena.Value = value; };

    protected jCbezDaniKC: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("JCbezDaniKC", HeliosProcedureParameterType.NUMERIC);
    public get JCbezDaniKC(): number | undefined | null { return this.jCbezDaniKC.Value; };
    public set JCbezDaniKC(value: number | undefined | null) { this.jCbezDaniKC.Value = value; };

    protected jCsSDKc: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("JCsSDKc", HeliosProcedureParameterType.NUMERIC);
    public get JCsSDKc(): number | undefined | null { return this.jCsSDKc.Value; };
    public set JCsSDKc(value: number | undefined | null) { this.jCsSDKc.Value = value; };

    protected jCsDPHKc: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("JCsDPHKc", HeliosProcedureParameterType.NUMERIC);
    public get JCsDPHKc(): number | undefined | null { return this.jCsDPHKc.Value; };
    public set JCsDPHKc(value: number | undefined | null) { this.jCsDPHKc.Value = value; };

    protected jCbezDaniVal: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("JCbezDaniVal", HeliosProcedureParameterType.NUMERIC);
    public get JCbezDaniVal(): number | undefined | null { return this.jCbezDaniVal.Value; };
    public set JCbezDaniVal(value: number | undefined | null) { this.jCbezDaniVal.Value = value; };

    protected jCsSDVal: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("JCsSDVal", HeliosProcedureParameterType.NUMERIC);
    public get JCsSDVal(): number | undefined | null { return this.jCsSDVal.Value; };
    public set JCsSDVal(value: number | undefined | null) { this.jCsSDVal.Value = value; };

    protected jCsDPHVal: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("JCsDPHVal", HeliosProcedureParameterType.NUMERIC);
    public get JCsDPHVal(): number | undefined | null { return this.jCsDPHVal.Value; };
    public set JCsDPHVal(value: number | undefined | null) { this.jCsDPHVal.Value = value; };

    protected cCbezDaniKc: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CCbezDaniKc", HeliosProcedureParameterType.NUMERIC);
    public get CCbezDaniKc(): number | undefined | null { return this.cCbezDaniKc.Value; };
    public set CCbezDaniKc(value: number | undefined | null) { this.cCbezDaniKc.Value = value; };

    protected cCsSDKc: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CCsSDKc", HeliosProcedureParameterType.NUMERIC);
    public get CCsSDKc(): number | undefined | null { return this.cCsSDKc.Value; };
    public set CCsSDKc(value: number | undefined | null) { this.cCsSDKc.Value = value; };

    protected cCsDPHKc: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CCsDPHKc", HeliosProcedureParameterType.NUMERIC);
    public get CCsDPHKc(): number | undefined | null { return this.cCsDPHKc.Value; };
    public set CCsDPHKc(value: number | undefined | null) { this.cCsDPHKc.Value = value; };

    protected cCbezDaniVal: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CCbezDaniVal", HeliosProcedureParameterType.NUMERIC);
    public get CCbezDaniVal(): number | undefined | null { return this.cCbezDaniVal.Value; };
    public set CCbezDaniVal(value: number | undefined | null) { this.cCbezDaniVal.Value = value; };

    protected cCsSDVal: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CCsSDVal", HeliosProcedureParameterType.NUMERIC);
    public get CCsSDVal(): number | undefined | null { return this.cCsSDVal.Value; };
    public set CCsSDVal(value: number | undefined | null) { this.cCsSDVal.Value = value; };

    protected cCsDPHVal: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CCsDPHVal", HeliosProcedureParameterType.NUMERIC);
    public get CCsDPHVal(): number | undefined | null { return this.cCsDPHVal.Value; };
    public set CCsDPHVal(value: number | undefined | null) { this.cCsDPHVal.Value = value; };

    protected cCevidPozadovana: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CCevidPozadovana", HeliosProcedureParameterType.NUMERIC);
    public get CCevidPozadovana(): number | undefined | null { return this.cCevidPozadovana.Value; };
    public set CCevidPozadovana(value: number | undefined | null) { this.cCevidPozadovana.Value = value; };

    protected nastaveniSlev: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("NastaveniSlev", HeliosProcedureParameterType.SMALLINT);
    public get NastaveniSlev(): number | undefined | null { return this.nastaveniSlev.Value; };
    public set NastaveniSlev(value: number | undefined | null) { this.nastaveniSlev.Value = value; };

    protected poznamka: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Poznamka", HeliosProcedureParameterType.NVARCHAR);
    public get Poznamka(): string | undefined | null { return this.poznamka.Value; };
    public set Poznamka(value: string | undefined | null) { this.poznamka.Value = value; };

    protected obal: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Obal", HeliosProcedureParameterType.INT);
    public get Obal(): number | undefined | null { return this.obal.Value; };
    public set Obal(value: number | undefined | null) { this.obal.Value = value; };

    protected cisloNOkruh: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("CisloNOkruh", HeliosProcedureParameterType.NVARCHAR);
    public get CisloNOkruh(): string | undefined | null { return this.cisloNOkruh.Value; };
    public set CisloNOkruh(value: string | undefined | null) { this.cisloNOkruh.Value = value; };

    protected datPorizeni: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatPorizeni", HeliosProcedureParameterType.DATETIME);
    public get DatPorizeni(): Date | undefined | null { return this.datPorizeni.Value; };
    public set DatPorizeni(value: Date | undefined | null) { this.datPorizeni.Value = value; };

    protected iDPrikaz: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDPrikaz", HeliosProcedureParameterType.INT);
    public get IDPrikaz(): number | undefined | null { return this.iDPrikaz.Value; };
    public set IDPrikaz(value: number | undefined | null) { this.iDPrikaz.Value = value; };

    protected iDOldPolozka: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDOldPolozka", HeliosProcedureParameterType.INT);
    public get IDOldPolozka(): number | undefined | null { return this.iDOldPolozka.Value; };
    public set IDOldPolozka(value: number | undefined | null) { this.iDOldPolozka.Value = value; };

    protected cisloOrg: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CisloOrg", HeliosProcedureParameterType.INT);
    public get CisloOrg(): number | undefined | null { return this.cisloOrg.Value; };
    public set CisloOrg(value: number | undefined | null) { this.cisloOrg.Value = value; };

    protected druhPohybuZbo: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("DruhPohybuZbo", HeliosProcedureParameterType.TINYINT);
    public get DruhPohybuZbo(): number | undefined | null { return this.druhPohybuZbo.Value; };
    public set DruhPohybuZbo(value: number | undefined | null) { this.druhPohybuZbo.Value = value; };

    protected potvrzDatDod: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("PotvrzDatDod", HeliosProcedureParameterType.DATETIME);
    public get PotvrzDatDod(): Date | undefined | null { return this.potvrzDatDod.Value; };
    public set PotvrzDatDod(value: Date | undefined | null) { this.potvrzDatDod.Value = value; };

    protected pozadDatDod: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("PozadDatDod", HeliosProcedureParameterType.DATETIME);
    public get PozadDatDod(): Date | undefined | null { return this.pozadDatDod.Value; };
    public set PozadDatDod(value: Date | undefined | null) { this.pozadDatDod.Value = value; };

    protected dokladPrikazu: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("DokladPrikazu", HeliosProcedureParameterType.INT);
    public get DokladPrikazu(): number | undefined | null { return this.dokladPrikazu.Value; };
    public set DokladPrikazu(value: number | undefined | null) { this.dokladPrikazu.Value = value; };

    protected hmotnost: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Hmotnost", HeliosProcedureParameterType.NUMERIC);
    public get Hmotnost(): number | undefined | null { return this.hmotnost.Value; };
    public set Hmotnost(value: number | undefined | null) { this.hmotnost.Value = value; };

    protected zemePuvodu: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("ZemePuvodu", HeliosProcedureParameterType.NVARCHAR);
    public get ZemePuvodu(): string | undefined | null { return this.zemePuvodu.Value; };
    public set ZemePuvodu(value: string | undefined | null) { this.zemePuvodu.Value = value; };

    protected zemePreference: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("ZemePreference", HeliosProcedureParameterType.NVARCHAR);
    public get ZemePreference(): string | undefined | null { return this.zemePreference.Value; };
    public set ZemePreference(value: string | undefined | null) { this.zemePreference.Value = value; };

    protected iDAkce: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDAkce", HeliosProcedureParameterType.INT);
    public get IDAkce(): number | undefined | null { return this.iDAkce.Value; };
    public set IDAkce(value: number | undefined | null) { this.iDAkce.Value = value; };

    protected stredNaklad: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("StredNaklad", HeliosProcedureParameterType.NVARCHAR);
    public get StredNaklad(): string | undefined | null { return this.stredNaklad.Value; };
    public set StredNaklad(value: string | undefined | null) { this.stredNaklad.Value = value; };

    protected zemeOdeslani: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("ZemeOdeslani", HeliosProcedureParameterType.NVARCHAR);
    public get ZemeOdeslani(): string | undefined | null { return this.zemeOdeslani.Value; };
    public set ZemeOdeslani(value: string | undefined | null) { this.zemeOdeslani.Value = value; };

    protected jcdid: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("JCDID", HeliosProcedureParameterType.INT);
    public get JCDID(): number | undefined | null { return this.jcdid.Value; };
    public set JCDID(value: number | undefined | null) { this.jcdid.Value = value; };

    protected idPolJCD: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IdPolJCD", HeliosProcedureParameterType.INT);
    public get IdPolJCD(): number | undefined | null { return this.idPolJCD.Value; };
    public set IdPolJCD(value: number | undefined | null) { this.idPolJCD.Value = value; };

    protected idPolNCTS: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IdPolNCTS", HeliosProcedureParameterType.INT);
    public get IdPolNCTS(): number | undefined | null { return this.idPolNCTS.Value; };
    public set IdPolNCTS(value: number | undefined | null) { this.idPolNCTS.Value = value; };

    protected lokace: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Lokace", HeliosProcedureParameterType.NVARCHAR);
    public get Lokace(): string | undefined | null { return this.lokace.Value; };
    public set Lokace(value: string | undefined | null) { this.lokace.Value = value; };

    protected mnozstviObalu: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("MnozstviObalu", HeliosProcedureParameterType.INT);
    public get MnozstviObalu(): number | undefined | null { return this.mnozstviObalu.Value; };
    public set MnozstviObalu(value: number | undefined | null) { this.mnozstviObalu.Value = value; };

    protected kodBaleni: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("KodBaleni", HeliosProcedureParameterType.NVARCHAR);
    public get KodBaleni(): string | undefined | null { return this.kodBaleni.Value; };
    public set KodBaleni(value: string | undefined | null) { this.kodBaleni.Value = value; };

    protected cisloEUR1: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("CisloEUR1", HeliosProcedureParameterType.NVARCHAR);
    public get CisloEUR1(): string | undefined | null { return this.cisloEUR1.Value; };
    public set CisloEUR1(value: string | undefined | null) { this.cisloEUR1.Value = value; };

    protected cisloLicence: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("CisloLicence", HeliosProcedureParameterType.NVARCHAR);
    public get CisloLicence(): string | undefined | null { return this.cisloLicence.Value; };
    public set CisloLicence(value: string | undefined | null) { this.cisloLicence.Value = value; };

    protected cisloJCD: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("CisloJCD", HeliosProcedureParameterType.NVARCHAR);
    public get CisloJCD(): string | undefined | null { return this.cisloJCD.Value; };
    public set CisloJCD(value: string | undefined | null) { this.cisloJCD.Value = value; };

    protected porCisloPolJCD: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("PorCisloPolJCD", HeliosProcedureParameterType.INT);
    public get PorCisloPolJCD(): number | undefined | null { return this.porCisloPolJCD.Value; };
    public set PorCisloPolJCD(value: number | undefined | null) { this.porCisloPolJCD.Value = value; };

    protected datumProjednaniJCD: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatumProjednaniJCD", HeliosProcedureParameterType.DATETIME);
    public get DatumProjednaniJCD(): Date | undefined | null { return this.datumProjednaniJCD.Value; };
    public set DatumProjednaniJCD(value: Date | undefined | null) { this.datumProjednaniJCD.Value = value; };

    protected dodaciPodminka: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("DodaciPodminka", HeliosProcedureParameterType.NVARCHAR);
    public get DodaciPodminka(): string | undefined | null { return this.dodaciPodminka.Value; };
    public set DodaciPodminka(value: string | undefined | null) { this.dodaciPodminka.Value = value; };

    protected kurzJCD: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("KurzJCD", HeliosProcedureParameterType.NUMERIC);
    public get KurzJCD(): number | undefined | null { return this.kurzJCD.Value; };
    public set KurzJCD(value: number | undefined | null) { this.kurzJCD.Value = value; };

    protected hmotnostBrutto: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("HmotnostBrutto", HeliosProcedureParameterType.NUMERIC);
    public get HmotnostBrutto(): number | undefined | null { return this.hmotnostBrutto.Value; };
    public set HmotnostBrutto(value: number | undefined | null) { this.hmotnostBrutto.Value = value; };

    protected lhuta: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("Lhuta", HeliosProcedureParameterType.DATETIME);
    public get Lhuta(): Date | undefined | null { return this.lhuta.Value; };
    public set Lhuta(value: Date | undefined | null) { this.lhuta.Value = value; };

    protected pCDCislo: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("PCDCislo", HeliosProcedureParameterType.NVARCHAR);
    public get PCDCislo(): string | undefined | null { return this.pCDCislo.Value; };
    public set PCDCislo(value: string | undefined | null) { this.pCDCislo.Value = value; };

    protected pCDPorCisloPol: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("PCDPorCisloPol", HeliosProcedureParameterType.INT);
    public get PCDPorCisloPol(): number | undefined | null { return this.pCDPorCisloPol.Value; };
    public set PCDPorCisloPol(value: number | undefined | null) { this.pCDPorCisloPol.Value = value; };

    protected pCDDatum: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("PCDDatum", HeliosProcedureParameterType.DATETIME);
    public get PCDDatum(): Date | undefined | null { return this.pCDDatum.Value; };
    public set PCDDatum(value: Date | undefined | null) { this.pCDDatum.Value = value; };

    protected barCode: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("BarCode", HeliosProcedureParameterType.NVARCHAR);
    public get BarCode(): string | undefined | null { return this.barCode.Value; };
    public set BarCode(value: string | undefined | null) { this.barCode.Value = value; };

    protected typVyrobnihoDokladu: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("TypVyrobnihoDokladu", HeliosProcedureParameterType.TINYINT);
    public get TypVyrobnihoDokladu(): number | undefined | null { return this.typVyrobnihoDokladu.Value; };
    public set TypVyrobnihoDokladu(value: number | undefined | null) { this.typVyrobnihoDokladu.Value = value; };

    protected kJKontrolovat: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("KJKontrolovat", HeliosProcedureParameterType.BIT);
    public get KJKontrolovat(): boolean | undefined | null { return this.kJKontrolovat.Value; };
    public set KJKontrolovat(value: boolean | undefined | null) { this.kJKontrolovat.Value = value; };

    protected kJSkontrolovano: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("KJSkontrolovano", HeliosProcedureParameterType.BIT);
    public get KJSkontrolovano(): boolean | undefined | null { return this.kJSkontrolovano.Value; };
    public set KJSkontrolovano(value: boolean | undefined | null) { this.kJSkontrolovano.Value = value; };

    protected pocetZmetku: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("PocetZmetku", HeliosProcedureParameterType.NUMERIC);
    public get PocetZmetku(): number | undefined | null { return this.pocetZmetku.Value; };
    public set PocetZmetku(value: number | undefined | null) { this.pocetZmetku.Value = value; };

    protected terminSlevaProc: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("TerminSlevaProc", HeliosProcedureParameterType.NUMERIC);
    public get TerminSlevaProc(): number | undefined | null { return this.terminSlevaProc.Value; };
    public set TerminSlevaProc(value: number | undefined | null) { this.terminSlevaProc.Value = value; };

    protected terminSlevaNazev: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("TerminSlevaNazev", HeliosProcedureParameterType.NVARCHAR);
    public get TerminSlevaNazev(): string | undefined | null { return this.terminSlevaNazev.Value; };
    public set TerminSlevaNazev(value: string | undefined | null) { this.terminSlevaNazev.Value = value; };

    protected slevaCastka: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaCastka", HeliosProcedureParameterType.NUMERIC);
    public get SlevaCastka(): number | undefined | null { return this.slevaCastka.Value; };
    public set SlevaCastka(value: number | undefined | null) { this.slevaCastka.Value = value; };

    protected idUmisteni: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IdUmisteni", HeliosProcedureParameterType.INT);
    public get IdUmisteni(): number | undefined | null { return this.idUmisteni.Value; };
    public set IdUmisteni(value: number | undefined | null) { this.idUmisteni.Value = value; };

    protected zamknoutCenu: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("ZamknoutCenu", HeliosProcedureParameterType.BIT);
    public get ZamknoutCenu(): boolean | undefined | null { return this.zamknoutCenu.Value; };
    public set ZamknoutCenu(value: boolean | undefined | null) { this.zamknoutCenu.Value = value; };

    protected sazbaDPHproPDP: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SazbaDPHproPDP", HeliosProcedureParameterType.NUMERIC);
    public get SazbaDPHproPDP(): number | undefined | null { return this.sazbaDPHproPDP.Value; };
    public set SazbaDPHproPDP(value: number | undefined | null) { this.sazbaDPHproPDP.Value = value; };

    protected iDOZTxtPol: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDOZTxtPol", HeliosProcedureParameterType.INT);
    public get IDOZTxtPol(): number | undefined | null { return this.iDOZTxtPol.Value; };
    public set IDOZTxtPol(value: number | undefined | null) { this.iDOZTxtPol.Value = value; };

    protected poradi: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Poradi", HeliosProcedureParameterType.INT);
    public get Poradi(): number | undefined | null { return this.poradi.Value; };
    public set Poradi(value: number | undefined | null) { this.poradi.Value = value; };

    protected iDZakazModif: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDZakazModif", HeliosProcedureParameterType.INT);
    public get IDZakazModif(): number | undefined | null { return this.iDZakazModif.Value; };
    public set IDZakazModif(value: number | undefined | null) { this.iDZakazModif.Value = value; };

    protected samoVyDPHZaklad: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SamoVyDPHZaklad", HeliosProcedureParameterType.NUMERIC);
    public get SamoVyDPHZaklad(): number | undefined | null { return this.samoVyDPHZaklad.Value; };
    public set SamoVyDPHZaklad(value: number | undefined | null) { this.samoVyDPHZaklad.Value = value; };

    protected samoVyDPHCastka: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SamoVyDPHCastka", HeliosProcedureParameterType.NUMERIC);
    public get SamoVyDPHCastka(): number | undefined | null { return this.samoVyDPHCastka.Value; };
    public set SamoVyDPHCastka(value: number | undefined | null) { this.samoVyDPHCastka.Value = value; };

    protected samoVyDPHZakladHM: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SamoVyDPHZakladHM", HeliosProcedureParameterType.NUMERIC);
    public get SamoVyDPHZakladHM(): number | undefined | null { return this.samoVyDPHZakladHM.Value; };
    public set SamoVyDPHZakladHM(value: number | undefined | null) { this.samoVyDPHZakladHM.Value = value; };

    protected samoVyDPHCastkaHM: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SamoVyDPHCastkaHM", HeliosProcedureParameterType.NUMERIC);
    public get SamoVyDPHCastkaHM(): number | undefined | null { return this.samoVyDPHCastkaHM.Value; };
    public set SamoVyDPHCastkaHM(value: number | undefined | null) { this.samoVyDPHCastkaHM.Value = value; };

    protected mnozOdebrane: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("MnozOdebrane", HeliosProcedureParameterType.NUMERIC);
    public get MnozOdebrane(): number | undefined | null { return this.mnozOdebrane.Value; };
    public set MnozOdebrane(value: number | undefined | null) { this.mnozOdebrane.Value = value; };

    protected iDCiloveTxtPol: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDCiloveTxtPol", HeliosProcedureParameterType.INT);
    public get IDCiloveTxtPol(): number | undefined | null { return this.iDCiloveTxtPol.Value; };
    public set IDCiloveTxtPol(value: number | undefined | null) { this.iDCiloveTxtPol.Value = value; };

    protected mnozstviRPT: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("MnozstviRPT", HeliosProcedureParameterType.NUMERIC);
    public get MnozstviRPT(): number | undefined | null { return this.mnozstviRPT.Value; };
    public set MnozstviRPT(value: number | undefined | null) { this.mnozstviRPT.Value = value; };

    protected mjkv: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("MJKV", HeliosProcedureParameterType.INT);
    public get MJKV(): number | undefined | null { return this.mjkv.Value; };
    public set MJKV(value: number | undefined | null) { this.mjkv.Value = value; };

    protected mnozstviKV: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("MnozstviKV", HeliosProcedureParameterType.NUMERIC);
    public get MnozstviKV(): number | undefined | null { return this.mnozstviKV.Value; };
    public set MnozstviKV(value: number | undefined | null) { this.mnozstviKV.Value = value; };

    protected dPHZadanaRucne: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("DPHZadanaRucne", HeliosProcedureParameterType.NUMERIC);
    public get DPHZadanaRucne(): number | undefined | null { return this.dPHZadanaRucne.Value; };
    public set DPHZadanaRucne(value: number | undefined | null) { this.dPHZadanaRucne.Value = value; };


}