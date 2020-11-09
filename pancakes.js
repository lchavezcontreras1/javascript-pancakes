$(document).ready(function () {
    $("button").click(checkShopping);

    function checkShopping() {
        var wantPancakes = $("#pancakes").is(":checked");
        var hasButter = $("#butter").is(":checked");
        var hasSyrup = $("#syrup").is(":checked");

        var goToStore = false;

        if (wantPancakes) {
            if (!hasButter) {
                goToStore = true;
            }
            if (!hasSyrup) {
                goToStore = true;
            }
        }

        $("#nested").text(goToStore);

        // Reset for next test
        goToStore = false;

        // Alternative:
        // var outOfButter = !hasButter;
        // var outOfSyrup = !hasSyrup;

        if (wantPancakes && !hasButter || !hasSyrup) {
            goToStore = true;
        }

        $("#noPar").text(goToStore);

        // Reset for next test
        goToStore = false;

        // Alternative:
        // if (isMakingPancakes && !(hasButter && hasSyrup))

        if (wantPancakes && (!hasButter || !hasSyrup)) {
            goToStore = true;
        }

        $("#withPar").text(goToStore);
    }

});