(function ($) {
  $(function () {
    let gameId = 4;
    let editingRow = null;

    const $modal = $("#gameModal");
    const $tbody = $("#gameTableBody");
    const $gameName = $("#gameName");
    const $gameGenre = $("#gameGenre");
    const $searchGame = $("#searchGame");

    // Open modal
    $("#btnOpenModal").click(function () {
      editingRow = null;
      resetForm();
      $modal.modal("show");
    });

    $modal.on("hidden.bs.modal", function () {
      $("#btnOpenModal").trigger("focus");
    });

    // Save game
    $("#btnSaveGame").click(function () {
      const name = $("#gameName").val().trim();
      const genre = $("#gameGenre").val().trim();

      if (!name || !genre) {
        alert("Please fill all fields.");
        return;
      }

      if (editingRow) {
        updateRow(editingRow, name, genre);
        editingRow = null;
      } else {
        appendRow(name, genre);
      }
      resetForm();
      $modal.modal("hide");
    });

    // Delete row (event delegation)
    $(document).on("click", ".btn-delete", function () {
      $(this).closest("tr").remove();
    });

    $(document).on("click", ".btn-edit", function () {
      const $row = $(this).closest("tr");
      const name = $row.find("td:eq(1)").text();
      const genre = $row.find("td:eq(2)").text();

      $gameName.val(name);
      $gameGenre.val(genre);
      editingRow = $row;
      $modal.modal("show");
    });

    $searchGame.on("keyup", function () {
      const keyword = $(this).val().toLowerCase();
      $("#gameTableBody tr").each(function () {
        const rowText = $(this).text().toLowerCase();
        $(this).toggle(rowText.includes(keyword));
      });
    });

    // Append new row
    function appendRow(name, genre) {
      const row = `
        <tr>
            <td>${gameId}</td>
            <td>${name}</td>
            <td>${genre}</td>
            <td>
                <span class="badge text-bg-warning">Draft</span>
            </td>
            <td>2026-04-28</td>
            <td class="text-end">
                <button class="btn btn-sm btn-outline-primary btn-edit">Edit</button>
                <button class="btn btn-sm btn-outline-danger btn-delete">Delete</button>
            </td>
        </tr>
    `;
      $tbody.append(row);
      gameId++;
    }

    function updateRow($row, name, genre) {
      $row.find("td:eq(1)").text(name);
      $row.find("td:eq(2)").text(genre);
    }

    //Reset form
    function resetForm() {
      $gameName.val("");
      $gameGenre.val("");
    }
  });
})(jQuery);
