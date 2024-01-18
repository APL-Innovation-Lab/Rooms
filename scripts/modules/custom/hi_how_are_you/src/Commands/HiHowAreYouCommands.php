<?php

namespace Drupal\hi_how_are_you\Commands;

use Drush\Commands\DrushCommands;

class HiHowAreYouCommands extends DrushCommands {

  /**
   * Creates a node and sets it as the default home page.
   *
   * @command hi_how_are_you:create_node
   * @aliases hhay-cn
   */
  public function createNode() {
    // Create the node and get its ID.
    $nid = hi_how_are_you_create_node();

    // Set the created node as the front page.
    \Drupal::configFactory()->getEditable('system.site')
      ->set('page.front', '/node/' . $nid)
      ->save();

    $this->logger()->success(dt('Node created successfully and set as the default home page.'));
  }

}
