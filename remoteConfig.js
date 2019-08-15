if (__DEV__) {
            firebase.config().enableDeveloperMode();
        }

        firebase.config().setDefaults({

        });

        firebase.config().fetch()
            .then(() => {
                return firebase.config().activateFetched();
            })
            .then((activated) => {
                if (!activated) console.log('Fetched data not activated');
                console.log("activated");
                return firebase.config().getValue('supportedVersions');

            })
            .then((snapshot) => {
                const supportedVersions = snapshot.val();

                if(supportedVersions) {
                    try {
                        AsyncStorage.setItem('supportedVersions', supportedVersions).then( (response)=> {
                            GlobalService.set("supportedVersions",JSON.parse(supportedVersions));
                            console.log(supportedVersions);
                            }
                        );
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    AsyncStorage.getItem('supportedVersions').then((response) => {
                        if (response !== null) {
                            GlobalService.set("supportedVersions",JSON.parse(response));
                        }
                    });

                }

            })
            .catch(console.error);
