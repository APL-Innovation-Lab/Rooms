<?php

/**
 * @file
 * Preprocess function for this hook.
 */

use Drupal\Core\Template\Attribute;
use Drupal\Core\Url;

 /**
 * Implements hook_preprocess_views_mini_pager().
 */
function uswds_base_preprocess_views_mini_pager(&$variables) {
  /** @var \Drupal\Core\Pager\PagerManagerInterface $pager_manager */
  $pager_manager = \Drupal::service('pager.manager');
  $element = $variables['element'];
  $parameters = $variables['parameters'];
  $pager = $pager_manager->getPager($element);

  // If there's no pager, don't process a pager.
  if (!isset($pager)) {
    return;
  }

  $current_page = $pager->getCurrentPage() + 1;
  $total_pages = $pager->getTotalPages();

  // If there's only one page, don't process a pager.
  if ($total_pages <= 1) {
    return;
  }

  $options = [
    'query' => $pager_manager->getUpdatedParameters($parameters, $element, $current_page - 1),
  ];

  if (!empty($variables['items']['current'])) {
    $variables['items']['current'] = [
      'href' => Url::fromRoute('<current>', [], $options)->toString(),
      'text' => $current_page,
      'attributes' => new Attribute(),
    ];
  }
}
