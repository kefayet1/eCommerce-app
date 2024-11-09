<?php
use Spatie\Permission\Middlewares\RoleMiddleware;

class Kernel extends App\Http\Kernel
{
    protected $routeMiddleware = [
        // Other middlewares...
        'role' => \Spatie\Permission\Middleware\RoleMiddleware::class,
    ];
}