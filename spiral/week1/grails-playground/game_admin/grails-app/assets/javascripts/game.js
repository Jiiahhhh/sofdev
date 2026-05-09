(function ($) {
    $(function () {

        const $modal = $("#gameModal");
        const $gameName = $("#gameName");
        const $gameGenre = $("#gameGenre");
        const $searchGame = $("#searchGame");

        // Open modal
        $("#btnOpenModal").click(function () {
            resetForm();
            $("#gameId").val("");
            $modal.modal("show");
        });

        $modal.on("hidden.bs.modal", function () {
            $("#btnOpenModal").trigger("focus");
        });

        $(document).on("click", ".btn-edit", function () {
            const id = $(this).data("id");
            const name = $(this).data("name");
            const genre = $(this).data("genre");

            $("#gameId").val(id)
            $("#gameName").val(name);
            $("#gameGenre").val(genre);
            $("#gameModal").modal("show");
        });

        $searchGame.on("keyup", function () {
            const keyword = $(this).val().toLowerCase();
            $("#gameTableBody tr").each(function () {
                const rowText = $(this).text().toLowerCase();
                $(this).toggle(rowText.includes(keyword));
            });
        });

        //Reset form
        function resetForm() {
            $gameName.val("");
            $gameGenre.val("");
        }
    });
})(jQuery);
