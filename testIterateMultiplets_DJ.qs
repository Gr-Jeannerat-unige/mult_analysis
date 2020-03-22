function testIterateMultiplets() {
	var i, spectrum, multiplets;

	var spectrum = new NMRSpectrum(nmr.activeSpectrum());
	var multiplets = spectrum.multiplets();
	
	for (i = 0; i < multiplets.count; i++) {
		aMultiplet = multiplets.at(i);
		print (JSON.stringify(aMultiplet) + "\n");
	}
}
