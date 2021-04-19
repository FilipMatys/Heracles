// Classes
import { HeliosProcedureParameter } from "../classes/parameter.class";
import { HeliosProcedureParameters } from "../classes/parameters.class";

// Enums
import { HeliosProcedureParameterType } from "../enums/paremeter-type.enum";

/**
 * Helios companies procedure parameters
 * @description Parameters for companies procedure
 */
export class HeliosCompaniesProcedureParameters extends HeliosProcedureParameters {

    protected cisloOrg: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CisloOrg", HeliosProcedureParameterType.INT);
    public get CisloOrg(): number | undefined | null { return this.cisloOrg.Value; };
    public set CisloOrg(value: number | undefined | null) { this.cisloOrg.Value = value; };

    protected nadrizenaOrg: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("NadrizenaOrg", HeliosProcedureParameterType.INT);
    public get NadrizenaOrg(): number | undefined | null { return this.nadrizenaOrg.Value; };
    public set NadrizenaOrg(value: number | undefined | null) { this.nadrizenaOrg.Value = value; };

    protected nazev: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Nazev", HeliosProcedureParameterType.NVARCHAR);
    public get Nazev(): string | undefined | null { return this.nazev.Value; };
    public set Nazev(value: string | undefined | null) { this.nazev.Value = value; };

    protected druhyNazev: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("DruhyNazev", HeliosProcedureParameterType.NVARCHAR);
    public get DruhyNazev(): string | undefined | null { return this.druhyNazev.Value; };
    public set DruhyNazev(value: string | undefined | null) { this.druhyNazev.Value = value; };

    protected misto: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Misto", HeliosProcedureParameterType.NVARCHAR);
    public get Misto(): string | undefined | null { return this.misto.Value; };
    public set Misto(value: string | undefined | null) { this.misto.Value = value; };

    protected idZeme: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("IdZeme", HeliosProcedureParameterType.NVARCHAR);
    public get IdZeme(): string | undefined | null { return this.idZeme.Value; };
    public set IdZeme(value: string | undefined | null) { this.idZeme.Value = value; };

    protected region: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Region", HeliosProcedureParameterType.NVARCHAR);
    public get Region(): string | undefined | null { return this.region.Value; };
    public set Region(value: string | undefined | null) { this.region.Value = value; };

    protected ulice: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Ulice", HeliosProcedureParameterType.NVARCHAR);
    public get Ulice(): string | undefined | null { return this.ulice.Value; };
    public set Ulice(value: string | undefined | null) { this.ulice.Value = value; };

    protected orCislo: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("OrCislo", HeliosProcedureParameterType.NVARCHAR);
    public get OrCislo(): string | undefined | null { return this.orCislo.Value; };
    public set OrCislo(value: string | undefined | null) { this.orCislo.Value = value; };

    protected popCislo: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("PopCislo", HeliosProcedureParameterType.NVARCHAR);
    public get PopCislo(): string | undefined | null { return this.popCislo.Value; };
    public set PopCislo(value: string | undefined | null) { this.popCislo.Value = value; };

    protected psc: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("PSC", HeliosProcedureParameterType.NVARCHAR);
    public get PSC(): string | undefined | null { return this.psc.Value; };
    public set PSC(value: string | undefined | null) { this.psc.Value = value; };

    protected poBox: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("PoBox", HeliosProcedureParameterType.NVARCHAR);
    public get PoBox(): string | undefined | null { return this.poBox.Value; };
    public set PoBox(value: string | undefined | null) { this.poBox.Value = value; };

    protected kontakt: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Kontakt", HeliosProcedureParameterType.NVARCHAR);
    public get Kontakt(): string | undefined | null { return this.kontakt.Value; };
    public set Kontakt(value: string | undefined | null) { this.kontakt.Value = value; };

    protected dic: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("DIC", HeliosProcedureParameterType.NVARCHAR);
    public get DIC(): string | undefined | null { return this.dic.Value; };
    public set DIC(value: string | undefined | null) { this.dic.Value = value; };

    protected dICsk: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("DICsk", HeliosProcedureParameterType.NVARCHAR);
    public get DICsk(): string | undefined | null { return this.dICsk.Value; };
    public set DICsk(value: string | undefined | null) { this.dICsk.Value = value; };

    protected lhutaSplatnosti: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("LhutaSplatnosti", HeliosProcedureParameterType.SMALLINT);
    public get LhutaSplatnosti(): number | undefined | null { return this.lhutaSplatnosti.Value; };
    public set LhutaSplatnosti(value: number | undefined | null) { this.lhutaSplatnosti.Value = value; };

    protected stav: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Stav", HeliosProcedureParameterType.TINYINT);
    public get Stav(): number | undefined | null { return this.stav.Value; };
    public set Stav(value: number | undefined | null) { this.stav.Value = value; };

    protected pravniForma: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("PravniForma", HeliosProcedureParameterType.TINYINT);
    public get PravniForma(): number | undefined | null { return this.pravniForma.Value; };
    public set PravniForma(value: number | undefined | null) { this.pravniForma.Value = value; };

    protected druhCinnosti: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("DruhCinnosti", HeliosProcedureParameterType.INT);
    public get DruhCinnosti(): number | undefined | null { return this.druhCinnosti.Value; };
    public set DruhCinnosti(value: number | undefined | null) { this.druhCinnosti.Value = value; };

    protected ico: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("ICO", HeliosProcedureParameterType.NVARCHAR);
    public get ICO(): string | undefined | null { return this.ico.Value; };
    public set ICO(value: string | undefined | null) { this.ico.Value = value; };

    protected sleva: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Sleva", HeliosProcedureParameterType.NUMERIC);
    public get Sleva(): number | undefined | null { return this.sleva.Value; };
    public set Sleva(value: number | undefined | null) { this.sleva.Value = value; };

    protected odHodnoty: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("OdHodnoty", HeliosProcedureParameterType.NUMERIC);
    public get OdHodnoty(): number | undefined | null { return this.odHodnoty.Value; };
    public set OdHodnoty(value: number | undefined | null) { this.odHodnoty.Value = value; };

    protected cenovaUroven: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CenovaUroven", HeliosProcedureParameterType.INT);
    public get CenovaUroven(): number | undefined | null { return this.cenovaUroven.Value; };
    public set CenovaUroven(value: number | undefined | null) { this.cenovaUroven.Value = value; };

    protected iDSOZsleva: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDSOZsleva", HeliosProcedureParameterType.INT);
    public get IDSOZsleva(): number | undefined | null { return this.iDSOZsleva.Value; };
    public set IDSOZsleva(value: number | undefined | null) { this.iDSOZsleva.Value = value; };

    protected iDSOZnazev: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDSOZnazev", HeliosProcedureParameterType.INT);
    public get IDSOZnazev(): number | undefined | null { return this.iDSOZnazev.Value; };
    public set IDSOZnazev(value: number | undefined | null) { this.iDSOZnazev.Value = value; };

    protected poznamka: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Poznamka", HeliosProcedureParameterType.NVARCHAR);
    public get Poznamka(): string | undefined | null { return this.poznamka.Value; };
    public set Poznamka(value: string | undefined | null) { this.poznamka.Value = value; };

    protected formaUhrady: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("FormaUhrady", HeliosProcedureParameterType.NVARCHAR);
    public get FormaUhrady(): string | undefined | null { return this.formaUhrady.Value; };
    public set FormaUhrady(value: string | undefined | null) { this.formaUhrady.Value = value; };

    protected jeOdberatel: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("JeOdberatel", HeliosProcedureParameterType.BIT);
    public get JeOdberatel(): boolean | undefined | null { return this.jeOdberatel.Value; };
    public set JeOdberatel(value: boolean | undefined | null) { this.jeOdberatel.Value = value; };

    protected jeDodavatel: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("JeDodavatel", HeliosProcedureParameterType.BIT);
    public get JeDodavatel(): boolean | undefined | null { return this.jeDodavatel.Value; };
    public set JeDodavatel(value: boolean | undefined | null) { this.jeDodavatel.Value = value; };

    protected vernostniProgram: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("VernostniProgram", HeliosProcedureParameterType.BIT);
    public get VernostniProgram(): boolean | undefined | null { return this.vernostniProgram.Value; };
    public set VernostniProgram(value: boolean | undefined | null) { this.vernostniProgram.Value = value; };

    protected odpOs: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("OdpOs", HeliosProcedureParameterType.INT);
    public get OdpOs(): number | undefined | null { return this.odpOs.Value; };
    public set OdpOs(value: number | undefined | null) { this.odpOs.Value = value; };

    protected upozorneni: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Upozorneni", HeliosProcedureParameterType.NVARCHAR);
    public get Upozorneni(): string | undefined | null { return this.upozorneni.Value; };
    public set Upozorneni(value: string | undefined | null) { this.upozorneni.Value = value; };

    protected cisloOrgDos: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("CisloOrgDos", HeliosProcedureParameterType.NVARCHAR);
    public get CisloOrgDos(): string | undefined | null { return this.cisloOrgDos.Value; };
    public set CisloOrgDos(value: string | undefined | null) { this.cisloOrgDos.Value = value; };

    protected mena: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Mena", HeliosProcedureParameterType.NVARCHAR);
    public get Mena(): string | undefined | null { return this.mena.Value; };
    public set Mena(value: string | undefined | null) { this.mena.Value = value; };

    protected fakturacni: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("Fakturacni", HeliosProcedureParameterType.BIT);
    public get Fakturacni(): boolean | undefined | null { return this.fakturacni.Value; };
    public set Fakturacni(value: boolean | undefined | null) { this.fakturacni.Value = value; };

    protected mu: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("MU", HeliosProcedureParameterType.BIT);
    public get MU(): boolean | undefined | null { return this.mu.Value; };
    public set MU(value: boolean | undefined | null) { this.mu.Value = value; };

    protected prijemce: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("Prijemce", HeliosProcedureParameterType.BIT);
    public get Prijemce(): boolean | undefined | null { return this.prijemce.Value; };
    public set Prijemce(value: boolean | undefined | null) { this.prijemce.Value = value; };

    protected iDBankSpojeni: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDBankSpojeni", HeliosProcedureParameterType.INT);
    public get IDBankSpojeni(): number | undefined | null { return this.iDBankSpojeni.Value; };
    public set IDBankSpojeni(value: number | undefined | null) { this.iDBankSpojeni.Value = value; };

    protected iDBankSpojPlatak: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDBankSpojPlatak", HeliosProcedureParameterType.INT);
    public get IDBankSpojPlatak(): number | undefined | null { return this.iDBankSpojPlatak.Value; };
    public set IDBankSpojPlatak(value: number | undefined | null) { this.iDBankSpojPlatak.Value = value; };

    protected carovyKodEAN: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("CarovyKodEAN", HeliosProcedureParameterType.NVARCHAR);
    public get CarovyKodEAN(): string | undefined | null { return this.carovyKodEAN.Value; };
    public set CarovyKodEAN(value: string | undefined | null) { this.carovyKodEAN.Value = value; };

    protected postAddress: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("PostAddress", HeliosProcedureParameterType.NVARCHAR);
    public get PostAddress(): string | undefined | null { return this.postAddress.Value; };
    public set PostAddress(value: string | undefined | null) { this.postAddress.Value = value; };

    protected kredit: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Kredit", HeliosProcedureParameterType.NUMERIC);
    public get Kredit(): number | undefined | null { return this.kredit.Value; };
    public set Kredit(value: number | undefined | null) { this.kredit.Value = value; };

    protected plneniBezDPH: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("PlneniBezDPH", HeliosProcedureParameterType.BIT);
    public get PlneniBezDPH(): boolean | undefined | null { return this.plneniBezDPH.Value; };
    public set PlneniBezDPH(value: boolean | undefined | null) { this.plneniBezDPH.Value = value; };

    protected jazyk: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Jazyk", HeliosProcedureParameterType.NVARCHAR);
    public get Jazyk(): string | undefined | null { return this.jazyk.Value; };
    public set Jazyk(value: string | undefined | null) { this.jazyk.Value = value; };

    protected datumNeupominani: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatumNeupominani", HeliosProcedureParameterType.DATETIME);
    public get DatumNeupominani(): Date | undefined | null { return this.datumNeupominani.Value; };
    public set DatumNeupominani(value: Date | undefined | null) { this.datumNeupominani.Value = value; };

    protected cenovaUrovenNakup: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CenovaUrovenNakup", HeliosProcedureParameterType.INT);
    public get CenovaUrovenNakup(): number | undefined | null { return this.cenovaUrovenNakup.Value; };
    public set CenovaUrovenNakup(value: number | undefined | null) { this.cenovaUrovenNakup.Value = value; };

    protected tin: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("TIN", HeliosProcedureParameterType.NVARCHAR);
    public get TIN(): string | undefined | null { return this.tin.Value; };
    public set TIN(value: string | undefined | null) { this.tin.Value = value; };

    protected eori: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("EORI", HeliosProcedureParameterType.NVARCHAR);
    public get EORI(): string | undefined | null { return this.eori.Value; };
    public set EORI(value: string | undefined | null) { this.eori.Value = value; };

    protected evCisDanovySklad: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("EvCisDanovySklad", HeliosProcedureParameterType.NVARCHAR);
    public get EvCisDanovySklad(): string | undefined | null { return this.evCisDanovySklad.Value; };
    public set EvCisDanovySklad(value: string | undefined | null) { this.evCisDanovySklad.Value = value; };

    protected slevaSozNa: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaSozNa", HeliosProcedureParameterType.TINYINT);
    public get SlevaSozNa(): number | undefined | null { return this.slevaSozNa.Value; };
    public set SlevaSozNa(value: number | undefined | null) { this.slevaSozNa.Value = value; };

    protected slevaSkupZbo: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaSkupZbo", HeliosProcedureParameterType.TINYINT);
    public get SlevaSkupZbo(): number | undefined | null { return this.slevaSkupZbo.Value; };
    public set SlevaSkupZbo(value: number | undefined | null) { this.slevaSkupZbo.Value = value; };

    protected slevaKmenZbo: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaKmenZbo", HeliosProcedureParameterType.TINYINT);
    public get SlevaKmenZbo(): number | undefined | null { return this.slevaKmenZbo.Value; };
    public set SlevaKmenZbo(value: number | undefined | null) { this.slevaKmenZbo.Value = value; };

    protected slevaStavSkladu: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaStavSkladu", HeliosProcedureParameterType.TINYINT);
    public get SlevaStavSkladu(): number | undefined | null { return this.slevaStavSkladu.Value; };
    public set SlevaStavSkladu(value: number | undefined | null) { this.slevaStavSkladu.Value = value; };

    protected slevaZbozi: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaZbozi", HeliosProcedureParameterType.TINYINT);
    public get SlevaZbozi(): number | undefined | null { return this.slevaZbozi.Value; };
    public set SlevaZbozi(value: number | undefined | null) { this.slevaZbozi.Value = value; };

    protected slevaOrg: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaOrg", HeliosProcedureParameterType.TINYINT);
    public get SlevaOrg(): number | undefined | null { return this.slevaOrg.Value; };
    public set SlevaOrg(value: number | undefined | null) { this.slevaOrg.Value = value; };

    protected idTxtPenFak: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IdTxtPenFak", HeliosProcedureParameterType.INT);
    public get IdTxtPenFak(): number | undefined | null { return this.idTxtPenFak.Value; };
    public set IdTxtPenFak(value: number | undefined | null) { this.idTxtPenFak.Value = value; };

    protected korekceSplatnoAuto: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("KorekceSplatnoAuto", HeliosProcedureParameterType.INT);
    public get KorekceSplatnoAuto(): number | undefined | null { return this.korekceSplatnoAuto.Value; };
    public set KorekceSplatnoAuto(value: number | undefined | null) { this.korekceSplatnoAuto.Value = value; };

    protected korekceSplatnoUziv: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("KorekceSplatnoUziv", HeliosProcedureParameterType.INT);
    public get KorekceSplatnoUziv(): number | undefined | null { return this.korekceSplatnoUziv.Value; };
    public set KorekceSplatnoUziv(value: number | undefined | null) { this.korekceSplatnoUziv.Value = value; };

    protected korekceSplatnoUzivD: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("KorekceSplatnoUzivD", HeliosProcedureParameterType.INT);
    public get KorekceSplatnoUzivD(): number | undefined | null { return this.korekceSplatnoUzivD.Value; };
    public set KorekceSplatnoUzivD(value: number | undefined | null) { this.korekceSplatnoUzivD.Value = value; };

    protected druhDopravy: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("DruhDopravy", HeliosProcedureParameterType.TINYINT);
    public get DruhDopravy(): number | undefined | null { return this.druhDopravy.Value; };
    public set DruhDopravy(value: number | undefined | null) { this.druhDopravy.Value = value; };

    protected dodaciPodminky: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("DodaciPodminky", HeliosProcedureParameterType.NVARCHAR);
    public get DodaciPodminky(): string | undefined | null { return this.dodaciPodminky.Value; };
    public set DodaciPodminky(value: string | undefined | null) { this.dodaciPodminky.Value = value; };

    protected rezimPenalizace: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("RezimPenalizace", HeliosProcedureParameterType.TINYINT);
    public get RezimPenalizace(): number | undefined | null { return this.rezimPenalizace.Value; };
    public set RezimPenalizace(value: number | undefined | null) { this.rezimPenalizace.Value = value; };

    protected penale: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Penale", HeliosProcedureParameterType.TINYINT);
    public get Penale(): number | undefined | null { return this.penale.Value; };
    public set Penale(value: number | undefined | null) { this.penale.Value = value; };

    protected partner: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Partner", HeliosProcedureParameterType.NVARCHAR);
    public get Partner(): string | undefined | null { return this.partner.Value; };
    public set Partner(value: string | undefined | null) { this.partner.Value = value; };

    protected platceDPH: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("PlatceDPH", HeliosProcedureParameterType.BIT);
    public get PlatceDPH(): boolean | undefined | null { return this.platceDPH.Value; };
    public set PlatceDPH(value: boolean | undefined | null) { this.platceDPH.Value = value; };

    protected iDSOZExpirace: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDSOZExpirace", HeliosProcedureParameterType.INT);
    public get IDSOZExpirace(): number | undefined | null { return this.iDSOZExpirace.Value; };
    public set IDSOZExpirace(value: number | undefined | null) { this.iDSOZExpirace.Value = value; };

    protected nazevOkresu: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("NazevOkresu", HeliosProcedureParameterType.NVARCHAR);
    public get NazevOkresu(): string | undefined | null { return this.nazevOkresu.Value; };
    public set NazevOkresu(value: string | undefined | null) { this.nazevOkresu.Value = value; };

    protected nazevCastiObce: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("NazevCastiObce", HeliosProcedureParameterType.NVARCHAR);
    public get NazevCastiObce(): string | undefined | null { return this.nazevCastiObce.Value; };
    public set NazevCastiObce(value: string | undefined | null) { this.nazevCastiObce.Value = value; };

    protected mestskaCast: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("MestskaCast", HeliosProcedureParameterType.NVARCHAR);
    public get MestskaCast(): string | undefined | null { return this.mestskaCast.Value; };
    public set MestskaCast(value: string | undefined | null) { this.mestskaCast.Value = value; };

    protected kodAdrMista: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("KodAdrMista", HeliosProcedureParameterType.INT);
    public get KodAdrMista(): number | undefined | null { return this.kodAdrMista.Value; };
    public set KodAdrMista(value: number | undefined | null) { this.kodAdrMista.Value = value; };

    protected nespolehPlatce: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("NespolehPlatce", HeliosProcedureParameterType.TINYINT);
    public get NespolehPlatce(): number | undefined | null { return this.nespolehPlatce.Value; };
    public set NespolehPlatce(value: number | undefined | null) { this.nespolehPlatce.Value = value; };

    protected aktZWebuNespolehPlatce: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("AktZWebuNespolehPlatce", HeliosProcedureParameterType.BIT);
    public get AktZWebuNespolehPlatce(): boolean | undefined | null { return this.aktZWebuNespolehPlatce.Value; };
    public set AktZWebuNespolehPlatce(value: boolean | undefined | null) { this.aktZWebuNespolehPlatce.Value = value; };

    protected aktZWebuZverejBankUcty: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("AktZWebuZverejBankUcty", HeliosProcedureParameterType.BIT);
    public get AktZWebuZverejBankUcty(): boolean | undefined | null { return this.aktZWebuZverejBankUcty.Value; };
    public set AktZWebuZverejBankUcty(value: boolean | undefined | null) { this.aktZWebuZverejBankUcty.Value = value; };

    protected datZverejNespolehPlatce: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatZverejNespolehPlatce", HeliosProcedureParameterType.DATETIME);
    public get DatZverejNespolehPlatce(): Date | undefined | null { return this.datZverejNespolehPlatce.Value; };
    public set DatZverejNespolehPlatce(value: Date | undefined | null) { this.datZverejNespolehPlatce.Value = value; };

    protected datPoslOverNespolehPlatceUziv: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatPoslOverNespolehPlatceUziv", HeliosProcedureParameterType.DATETIME);
    public get DatPoslOverNespolehPlatceUziv(): Date | undefined | null { return this.datPoslOverNespolehPlatceUziv.Value; };
    public set DatPoslOverNespolehPlatceUziv(value: Date | undefined | null) { this.datPoslOverNespolehPlatceUziv.Value = value; };

    protected zajisteniDPHJinyDuvodRuceni: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZajisteniDPHJinyDuvodRuceni", HeliosProcedureParameterType.TINYINT);
    public get ZajisteniDPHJinyDuvodRuceni(): number | undefined | null { return this.zajisteniDPHJinyDuvodRuceni.Value; };
    public set ZajisteniDPHJinyDuvodRuceni(value: number | undefined | null) { this.zajisteniDPHJinyDuvodRuceni.Value = value; };

    protected zajisteniDPHJinyDuvodRuceniDatZverej: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("ZajisteniDPHJinyDuvodRuceniDatZverej", HeliosProcedureParameterType.DATETIME);
    public get ZajisteniDPHJinyDuvodRuceniDatZverej(): Date | undefined | null { return this.zajisteniDPHJinyDuvodRuceniDatZverej.Value; };
    public set ZajisteniDPHJinyDuvodRuceniDatZverej(value: Date | undefined | null) { this.zajisteniDPHJinyDuvodRuceniDatZverej.Value = value; };

    protected partnerICO: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("PartnerICO", HeliosProcedureParameterType.NVARCHAR);
    public get PartnerICO(): string | undefined | null { return this.partnerICO.Value; };
    public set PartnerICO(value: string | undefined | null) { this.partnerICO.Value = value; };

    protected lhutaSplatnostiDodavatel: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("LhutaSplatnostiDodavatel", HeliosProcedureParameterType.SMALLINT);
    public get LhutaSplatnostiDodavatel(): number | undefined | null { return this.lhutaSplatnostiDodavatel.Value; };
    public set LhutaSplatnostiDodavatel(value: number | undefined | null) { this.lhutaSplatnostiDodavatel.Value = value; };

}