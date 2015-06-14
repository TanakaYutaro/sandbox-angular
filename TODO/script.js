angular.module('TODO', [])
    .controller('TodoController', function () {
        this.todos = [
            'システム企画',
            '要件定義',
            '概要設計',
            '詳細設計',
            'プログラム設計',
            'プログラミング',
            'プログラムテスト',
            '結合テスト',
            '受入テスト',
            '運用テスト',
            'リリース'
        ];
    });