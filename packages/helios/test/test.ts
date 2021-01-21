import { HeliosClient, HeliosRequestMethod, HeliosRuntime, HeliosView, IHeliosNavigationTreeEntity } from "../lib/helios";
import * as FileSystem from "fs";
import { IHeliosDataSet } from "../lib/interfaces/types/data-set.interface";

describe("HeliosClient", async () => {

    // Initialize client
    HeliosClient.initialize({
        ssl: true,
        host: "api.klobouckalesni.cz",
        port: 443,
        version: "1.0",
        hostPath: "helios-orange",
        defaultRequestMethod: HeliosRequestMethod.Get,
        defaultCustomHeaders: { "x-api-key": "GT29PHJqx9VFYTcv" },
        runtimeTimeout: 1000 * 60 * 30
    });

    // Observe execute communication
    HeliosClient.Execute.observe().subscribe((result) => console.log(result));

    // Execute login
    const loginResponse = await HeliosClient.Execute.login(HeliosRuntime.create(""), {
        Domain: "",
        PluginSysName: "eServerEshop",
        Version: "1.0",
        Username: "Kratochvil",
        Password: "krA.jiR*@"
    });

    // Check if response has fields
    if (!loginResponse.fields) {
        return;
    }

    // Create runtime
    const runtime = HeliosRuntime.create(loginResponse.fields.Result);

    // Change database
    const changeDatabaseResponse = await HeliosClient.Execute.changeDatabase(runtime, {
        Version: "1.0",
        DatabaseName: "Helios_cvicna_test"
    });

    
    // Get browse special response
    const getBrowseSpecialResponse = await HeliosClient.Execute.getBrowseSpecial(runtime, {
        BrowseName: "2",
        IDFilter: "1304"
    }, {});


    // Logout
    const logoutResponse = await HeliosClient.Execute.logout(runtime, {
        Version: "1.0"
    });
});