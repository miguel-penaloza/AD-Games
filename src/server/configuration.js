class Configuration {
	static get adminEmail() {
		return "jorge.rodriguez@appdirect.com";
	}

	static get adminPassword() {
		return "KamiKamiCorosama.965";
	}

	static get firebaseConfiguration() {
		return {
			apiKey: "AIzaSyBnL895thjYaf-cXMHHAWCNBJDFY_r1wsI",
			authDomain: "ad-games.firebaseapp.com",
			databaseURL: "https://ad-games.firebaseio.com",
			projectId: "ad-games",
			storageBucket: "ad-games.appspot.com",
			messagingSenderId: "863983249957"
		}
	}

}

export default Configuration;
