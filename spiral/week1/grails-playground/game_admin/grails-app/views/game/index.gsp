<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Game Admin Panel</title>
    <asset:stylesheet src="bootstrap.min.css"/>
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
    <asset:stylesheet src="game.css"/>
</head>

<body>
<div class="d-flex">
    <!-- Sidebar -->
    <aside class="sidebar bg-dark text-white p-3">
        <h4 class="mb-4">🎮 Admin</h4>
        <ul class="nav flex-column gap-2">
            <li>
                <a href="#" class="nav-link text-white"><i class="bi bi-speedometer2"></i> Dashboard</a>
            </li>
            <li>
                <a href="#" class="nav-link text-white"><i class="bi bi-controller"></i> Games</a>
            </li>
            <li>
                <a href="#" class="nav-link text-white"><i class="bi bi-newspaper"></i> Articles</a>
            </li>
            <li>
                <a href="#" class="nav-link text-white"><i class="bi bi-people"></i> Users</a>
            </li>
        </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow-1 p-4">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h2 class="mb-0">Game Management</h2>
                <small class="text-muted">Manage your game catalog</small>
            </div>

            <div>
                <button class="btn btn-primary" id="btnOpenModal">
                    <i class="bi bi-plus-lg"></i> Add Game
                </button>
            </div>
        </div>

        <!-- Card -->
        <g:if test="${flash.message}">
            <div class="alert alert-success">
                ${flash.message}
            </div>
        </g:if>
        <div class="card shadow-sm">
            <g:hasErrors bean="${game}">
                <div class="alert alert-danger">
                    <g:eachError bean="${game}" var="error">
                        <div>
                            <g:message error="${error}"/>
                        </div>
                    </g:eachError>
                </div>
            </g:hasErrors>
            <div class="card-body">
                <!-- Top Actions -->
                <div class="d-flex gap-2 mb-3 align-items-center">
                    <div class="input-group mb-3">
                        <input
                                type="text"
                                class="form-control"
                                id="searchGame"
                                placeholder="Search game..."/>

                        <button class="btn btn-outline-secondary">
                            <i class="bi bi-funnel"></i> Filter
                        </button>
                    </div>
                </div>

                <!-- Table -->
                <div class="table-responsive">
                    <table class="table align-middle">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Game Name</th>
                            <th>Genre</th>
                            <th>Status</th>
                            <th>Release Date</th>
                            <th class="text-end">Action</th>
                        </tr>
                        </thead>
                        <tbody id="gameTableBody">
                        <g:each in="${games}" var="game">
                            <tr>
                                <td>${game.id}</td>
                                <td>${game.name}</td>
                                <td>${game.genre}</td>
                                <td>
                                    <span class="badge
                                        ${game.status == 'Published' ? 'text-bg-success' :
                                            game.status == 'Draft' ? 'text-bg-warning' :
                                                    'text-bg-secondary'}">
                                        ${game.status}
                                    </span>
                                </td>
                                <td>
                                    <g:formatDate date="${game.releaseDate}" format="yyyy-MM-dd"/>
                                </td>
                                <td class="text-end">
                                    <button type="button" class="btn btn-sm btn-outline-primary btn-edit" data-id="${game.id}"
                                            data-name="${game.name}" data-genre="${game.genre}">
                                        Edit
                                    </button>
                                    <g:link controller="game" action="deleteGame" id="${game.id}"
                                            class="btn btn-sm btn-outline-danger">
                                        Delete
                                    </g:link>
                                </td>
                            </tr>
                        </g:each>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</div>

<div class="modal fade" id="gameModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <g:form controller="game" action="save">
                <div class="modal-header">
                    <h5 class="modal-title">Add New Game</h5>
                    <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"></button>
                </div>

                <input type="hidden" name="id" id="gameId">

                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Game Name</label>
                        <input type="text" class="form-control" name="name" id="gameName"/>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Genre</label>
                        <input type="text" class="form-control" name="genre" id="gameGenre"/>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">
                        Cancel
                    </button>
                    <button class="btn btn-primary" type="submit">Save Game</button>
                </div>
            </g:form>
        </div>
    </div>
</div>

<!-- jQuery -->
<asset:javascript src="jquery-3.5.1.min.js"/>

<!-- Bootstrap JS -->
<asset:javascript src="bootstrap.bundle.js"/>

<!-- Custom JS -->
<asset:javascript src="game.js"/>
</body>
</html>
