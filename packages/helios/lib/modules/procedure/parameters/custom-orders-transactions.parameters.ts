// Classes
import { HeliosProcedureParameter } from "../classes/parameter.class";
import { HeliosProcedureParameters } from "../classes/parameters.class";

// Enums
import { HeliosProcedureParameterType } from "../enums/parameter-type.enum";

/**
 * Helios custom order transactions procedure parameters
 * @description Parameters for custom order transactions procedure
 */
export class HeliosCustomOrdersTransactionsProcedureParameters extends HeliosProcedureParameters {
    protected iDHlava: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDHlava", HeliosProcedureParameterType.INT);
    public get IDHlava(): number | undefined | null { return this.iDHlava.Value; };
    public set IDHlava(value: number | undefined | null) { this.iDHlava.Value = value; };

    protected iDObalovaneZbozi: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDObalovaneZbozi", HeliosProcedureParameterType.INT);
    public get IDObalovaneZbozi(): number | undefined | null { return this.iDObalovaneZbozi.Value; };
    public set IDObalovaneZbozi(value: number | undefined | null) { this.iDObalovaneZbozi.Value = value; };

    protected iDZboSklad: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDZboSklad", HeliosProcedureParameterType.INT);
    public get IDZboSklad(): number | undefined | null { return this.iDZboSklad.Value; };
    public set IDZboSklad(value: number | undefined | null) { this.iDZboSklad.Value = value; };

    protected jeStin: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("JeStin", HeliosProcedureParameterType.BIT);
    public get JeStin(): boolean | undefined | null { return this.jeStin.Value; };
    public set JeStin(value: boolean | undefined | null) { this.jeStin.Value = value; };

    protected iDAkce: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDAkce", HeliosProcedureParameterType.INT);
    public get IDAkce(): number | undefined | null { return this.iDAkce.Value; };
    public set IDAkce(value: number | undefined | null) { this.iDAkce.Value = value; };

    protected nazevSozNa1: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("NazevSozNa1", HeliosProcedureParameterType.NVARCHAR);
    public get NazevSozNa1(): string | undefined | null { return this.nazevSozNa1.Value; };
    public set NazevSozNa1(value: string | undefined | null) { this.nazevSozNa1.Value = value; };

    protected nazevSozNa2: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("NazevSozNa2", HeliosProcedureParameterType.NVARCHAR);
    public get NazevSozNa2(): string | undefined | null { return this.nazevSozNa2.Value; };
    public set NazevSozNa2(value: string | undefined | null) { this.nazevSozNa2.Value = value; };

    protected nazevSozNa3: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("NazevSozNa3", HeliosProcedureParameterType.NVARCHAR);
    public get NazevSozNa3(): string | undefined | null { return this.nazevSozNa3.Value; };
    public set NazevSozNa3(value: string | undefined | null) { this.nazevSozNa3.Value = value; };

    protected barCode: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("BarCode", HeliosProcedureParameterType.NVARCHAR);
    public get BarCode(): string | undefined | null { return this.barCode.Value; };
    public set BarCode(value: string | undefined | null) { this.barCode.Value = value; };

    protected mnozstvi: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Mnozstvi", HeliosProcedureParameterType.NUMERIC);
    public get Mnozstvi(): number | undefined | null { return this.mnozstvi.Value; };
    public set Mnozstvi(value: number | undefined | null) { this.mnozstvi.Value = value; };

    protected mj: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("MJ", HeliosProcedureParameterType.NVARCHAR);
    public get MJ(): string | undefined | null { return this.mj.Value; };
    public set MJ(value: string | undefined | null) { this.mj.Value = value; };

    protected prepMnozstvi: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("PrepMnozstvi", HeliosProcedureParameterType.FLOAT);
    public get PrepMnozstvi(): number | undefined | null { return this.prepMnozstvi.Value; };
    public set PrepMnozstvi(value: number | undefined | null) { this.prepMnozstvi.Value = value; };

    protected sazbaDPH: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SazbaDPH", HeliosProcedureParameterType.NUMERIC);
    public get SazbaDPH(): number | undefined | null { return this.sazbaDPH.Value; };
    public set SazbaDPH(value: number | undefined | null) { this.sazbaDPH.Value = value; };

    protected sazbaSD: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SazbaSD", HeliosProcedureParameterType.NUMERIC);
    public get SazbaSD(): number | undefined | null { return this.sazbaSD.Value; };
    public set SazbaSD(value: number | undefined | null) { this.sazbaSD.Value = value; };

    protected prepocetMJSD: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("PrepocetMJSD", HeliosProcedureParameterType.NUMERIC);
    public get PrepocetMJSD(): number | undefined | null { return this.prepocetMJSD.Value; };
    public set PrepocetMJSD(value: number | undefined | null) { this.prepocetMJSD.Value = value; };

    protected mjsd: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("MJSD", HeliosProcedureParameterType.NVARCHAR);
    public get MJSD(): string | undefined | null { return this.mjsd.Value; };
    public set MJSD(value: string | undefined | null) { this.mjsd.Value = value; };

    protected hmotnost: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Hmotnost", HeliosProcedureParameterType.NUMERIC);
    public get Hmotnost(): number | undefined | null { return this.hmotnost.Value; };
    public set Hmotnost(value: number | undefined | null) { this.hmotnost.Value = value; };

    protected pozadDatDod: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("PozadDatDod", HeliosProcedureParameterType.DATETIME);
    public get PozadDatDod(): Date | undefined | null { return this.pozadDatDod.Value; };
    public set PozadDatDod(value: Date | undefined | null) { this.pozadDatDod.Value = value; };

    protected potvrzDatDod: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("PotvrzDatDod", HeliosProcedureParameterType.DATETIME);
    public get PotvrzDatDod(): Date | undefined | null { return this.potvrzDatDod.Value; };
    public set PotvrzDatDod(value: Date | undefined | null) { this.potvrzDatDod.Value = value; };

    protected hlidanoDatOd: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("HlidanoDatOd", HeliosProcedureParameterType.DATETIME);
    public get HlidanoDatOd(): Date | undefined | null { return this.hlidanoDatOd.Value; };
    public set HlidanoDatOd(value: Date | undefined | null) { this.hlidanoDatOd.Value = value; };

    protected hlidanoDatDo: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("HlidanoDatDo", HeliosProcedureParameterType.DATETIME);
    public get HlidanoDatDo(): Date | undefined | null { return this.hlidanoDatDo.Value; };
    public set HlidanoDatDo(value: Date | undefined | null) { this.hlidanoDatDo.Value = value; };

    protected vstupniCena: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("VstupniCena", HeliosProcedureParameterType.TINYINT);
    public get VstupniCena(): number | undefined | null { return this.vstupniCena.Value; };
    public set VstupniCena(value: number | undefined | null) { this.vstupniCena.Value = value; };

    protected zamknoutCenu: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("ZamknoutCenu", HeliosProcedureParameterType.BIT);
    public get ZamknoutCenu(): boolean | undefined | null { return this.zamknoutCenu.Value; };
    public set ZamknoutCenu(value: boolean | undefined | null) { this.zamknoutCenu.Value = value; };

    protected cena: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Cena", HeliosProcedureParameterType.NUMERIC);
    public get Cena(): number | undefined | null { return this.cena.Value; };
    public set Cena(value: number | undefined | null) { this.cena.Value = value; };

    protected nastaveniSlev: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("NastaveniSlev", HeliosProcedureParameterType.SMALLINT);
    public get NastaveniSlev(): number | undefined | null { return this.nastaveniSlev.Value; };
    public set NastaveniSlev(value: number | undefined | null) { this.nastaveniSlev.Value = value; };

    protected slevaSozNa: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaSozNa", HeliosProcedureParameterType.NUMERIC);
    public get SlevaSozNa(): number | undefined | null { return this.slevaSozNa.Value; };
    public set SlevaSozNa(value: number | undefined | null) { this.slevaSozNa.Value = value; };

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

    protected terminSlevaProc: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("TerminSlevaProc", HeliosProcedureParameterType.NUMERIC);
    public get TerminSlevaProc(): number | undefined | null { return this.terminSlevaProc.Value; };
    public set TerminSlevaProc(value: number | undefined | null) { this.terminSlevaProc.Value = value; };

    protected terminSlevaNazev: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("TerminSlevaNazev", HeliosProcedureParameterType.NVARCHAR);
    public get TerminSlevaNazev(): string | undefined | null { return this.terminSlevaNazev.Value; };
    public set TerminSlevaNazev(value: string | undefined | null) { this.terminSlevaNazev.Value = value; };

    protected slevaCastka: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SlevaCastka", HeliosProcedureParameterType.NUMERIC);
    public get SlevaCastka(): number | undefined | null { return this.slevaCastka.Value; };
    public set SlevaCastka(value: number | undefined | null) { this.slevaCastka.Value = value; };

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

    protected poznamka: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Poznamka", HeliosProcedureParameterType.NVARCHAR);
    public get Poznamka(): string | undefined | null { return this.poznamka.Value; };
    public set Poznamka(value: string | undefined | null) { this.poznamka.Value = value; };

    protected iDZakazModif: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDZakazModif", HeliosProcedureParameterType.INT);
    public get IDZakazModif(): number | undefined | null { return this.iDZakazModif.Value; };
    public set IDZakazModif(value: number | undefined | null) { this.iDZakazModif.Value = value; };

    protected iDDObjTxtPol: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDDObjTxtPol", HeliosProcedureParameterType.INT);
    public get IDDObjTxtPol(): number | undefined | null { return this.iDDObjTxtPol.Value; };
    public set IDDObjTxtPol(value: number | undefined | null) { this.iDDObjTxtPol.Value = value; };

    protected mnozstviRPT: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("MnozstviRPT", HeliosProcedureParameterType.NUMERIC);
    public get MnozstviRPT(): number | undefined | null { return this.mnozstviRPT.Value; };
    public set MnozstviRPT(value: number | undefined | null) { this.mnozstviRPT.Value = value; };

    protected splnenoPol: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("SplnenoPol", HeliosProcedureParameterType.BIT);
    public get SplnenoPol(): boolean | undefined | null { return this.splnenoPol.Value; };
    public set SplnenoPol(value: boolean | undefined | null) { this.splnenoPol.Value = value; };

    protected sazbaDPHproPDP: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SazbaDPHproPDP", HeliosProcedureParameterType.NUMERIC);
    public get SazbaDPHproPDP(): number | undefined | null { return this.sazbaDPHproPDP.Value; };
    public set SazbaDPHproPDP(value: number | undefined | null) { this.sazbaDPHproPDP.Value = value; };

    protected povolitDuplicitu: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("PovolitDuplicitu", HeliosProcedureParameterType.BIT);
    public get PovolitDuplicitu(): boolean | undefined | null { return this.povolitDuplicitu.Value; };
    public set PovolitDuplicitu(value: boolean | undefined | null) { this.povolitDuplicitu.Value = value; };

    protected povolitBlokovane: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("PovolitBlokovane", HeliosProcedureParameterType.BIT);
    public get PovolitBlokovane(): boolean | undefined | null { return this.povolitBlokovane.Value; };
    public set PovolitBlokovane(value: boolean | undefined | null) { this.povolitBlokovane.Value = value; };
}