<p class="footer-title">Tags tin tức:</p>
<ul class="footer-tags-lists w-clear">
    <?php foreach ($tagsNews as $v) { ?>
        <li class="mr-1 mb-1"><a class="btn btn-sm btn-danger rounded" href="<?= $v[$sluglang] ?>" target="_blank" title="<?= $v['name' . $lang] ?>"><?= $v['name' . $lang] ?></a></li>
    <?php } ?>
</ul>